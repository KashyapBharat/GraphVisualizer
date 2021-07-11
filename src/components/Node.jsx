import React from "react";

function Node(props) 
{
   return (
   <div 
   onClick={()=>props.Clickfunc([props.rowid,props.colid])} 
   onMouseDown={()=>props.setter(true)} 
   onMouseEnter={()=>props.Bool && props.Clickfunc([props.rowid,props.colid])} 
   onMouseUp={()=>props.setter(false)} 
   
                                                                            className={props.isWall? "isWall": 
                                                                            props.isStart? "isSrt":
                                                                            props.isEnd? "isEnd": 
                                                                            props.isExp? "isExplore":
                                                                            props.isPat? "Path":
                                                                            props.isVis? "isVisit":"node"}
   ></div>
   );
}
export default Node;
