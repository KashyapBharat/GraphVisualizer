import React, { useState } from "react";
import Node from "./Node";
import dijkstra from "./Dijkstra";
import Astar from "./Astar";
import GreedyBFS from "./GreedyBFS";
import Header from "./Header";

let ROW_LENGTH=15;
let COL_LENGTH=50;
const grid = [];

  for (let i = 0; i < ROW_LENGTH; i++) 
  {
  const currentRow = [];
  for (let j = 0; j < COL_LENGTH; j++) {
    currentRow.push({
      rowid:i,
      colid:j,
      isStart:false,
      isEnd:false,
      isVis:false,
      isWall:false,
      isPat:false,
      isExp:false,
      isParent:[]
      // more props?
    });
  }
    grid.push(currentRow);
  }

grid[2][2].isStart=true;
grid[10][45].isEnd=true;  

function App() 
{

  const[board,setboard]=useState(grid);
  const[test,setTest]=useState(0);
  const[Bool,setBool]=useState(false);

function resetBoard()
{
  let ROW_LENGTH=15;
  let COL_LENGTH=50;

  for (let i = 0; i < ROW_LENGTH; i++) 
  {
  for (let j = 0; j < COL_LENGTH; j++) 
  {
      if(!board[i][j].isWall){
      grid[i][j].rowid=i;
      grid[i][j].colid=j;
      grid[i][j].isStart=false;
      grid[i][j].isEnd=false;
      grid[i][j].isVis=false;
      grid[i][j].isWall=false;
      grid[i][j].isPat=false;
      grid[i][j].isExp=false;
      grid[i][j].isParent=[];
      // more props?
      }
    }
  }
  grid[2][2].isStart=true;
  grid[10][45].isEnd=true; 
  setboard(grid);
  setTest(Math.random());
}

function clearBoard()
{
  let ROW_LENGTH=15;
  let COL_LENGTH=50;

  for (let i = 0; i < ROW_LENGTH; i++) 
  {
  for (let j = 0; j < COL_LENGTH; j++) 
  {
      grid[i][j].rowid=i;
      grid[i][j].colid=j;
      grid[i][j].isStart=false;
      grid[i][j].isEnd=false;
      grid[i][j].isVis=false;
      grid[i][j].isWall=false;
      grid[i][j].isPat=false;
      grid[i][j].isExp=false;
      grid[i][j].isParent=[]
      // more props?
    }
  }
  grid[2][2].isStart=true;
  grid[10][45].isEnd=true; 
  setboard(grid);
  setTest(Math.random());
}

grid[2][2].isStart=true;
grid[10][45].isEnd=true; 
  
  function handleClick([rowd,cold])
  {
      if(grid[rowd][cold].isStart || grid[rowd][cold].isEnd) return;
      grid[rowd][cold].isWall^=true;
      setboard(grid);
      setTest(Math.random());
  }
  
  function isVisited([rowd,cold])
  {
    if(!grid[rowd][cold].isStart && !grid[rowd][cold].isEnd)
    {
    grid[rowd][cold].isVis=true;
    grid[rowd][cold].isExp=false;
    console.log("VIS");
    //grid[rowd][cold].isPat=false;
    // console.log(grid[3][6].isVis);
    setboard(grid);
    setTest(Math.random());
    }
    setTest(Math.random());
  }

  function isExplored([rowd,cold])
  {
    if(!grid[rowd][cold].isStart && !grid[rowd][cold].isEnd)
    {
    //grid[rowd][cold].isVis=true;
    grid[rowd][cold].isExp=true;
    //grid[rowd][cold].isVis=false;
    console.log("EXP");
    //console.log("MISHRA");
    setboard(grid);
    setTest(Math.random());
    }
    setTest(Math.random());
  }

  function isPath([rowd,cold])
  {
    if(!grid[rowd][cold].isStart && !grid[rowd][cold].isEnd)
    {
    //console.log(rowd+" "+cold);
    //setTimeout(() => isPath([rowd,cold]),1000);
    grid[rowd][cold].isPat=true;
    grid[rowd][cold].isExp=false;
    //grid[rowd][cold].isVis=false;
    console.log("PATH");
    setboard(grid);
    setTest(Math.random());
    }
    setTest(Math.random());
  }


  return(
  <div class="Marg">
  <Header></Header> 
  {board.map((row, rowid) => {
    return (<div className="ROW" key={rowid}>
    {row.map((col,colid) =>{
      return (
        <Node key={[rowid,colid]} rowid={col.rowid} colid={col.colid} isStart={col.isStart} isEnd={col.isEnd} 
        isVis={col.isVis} isWall={col.isWall} isPat={col.isPat} isExp={col.isExp}
         Clickfunc={handleClick} Bool={Bool} setter={setBool}>
        </Node>
        );})}
    </div>);})}
    <button className="btn btn-lg btn-primary clicker" onClick={resetBoard}>RESET</button>
    <button className="btn btn-lg btn-success clicker" onClick={clearBoard}>CLEAR</button>
    <button className="btn btn-lg btn-danger clicker" onClick={()=>dijkstra(grid,isVisited,isExplored,isPath,)}>Dijkstra</button>
    <button className="btn btn-lg btn-warning clicker" onClick={()=>Astar(grid,isVisited,isExplored,isPath,)}>A-STAR</button>
    <button className="btn btn-lg btn-info clicker" onClick={()=>GreedyBFS(grid,isVisited,isExplored,isPath,)}>Greedy BFS</button>
    </div>
  );
}

export default App;
