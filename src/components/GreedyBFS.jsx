function GreedyBFS(grid, isVisited, isExplored, isPath) {

    const start = [2, 2],
      end = [10, 45];
    const dx = [0, 1, 0, -1],
      dy = [1, 0, -1, 0];
  
    function distance(x1, y1, x2, y2) {
      return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
  
    let dist = [],
      prev = [];
    for (let i = 0; i < 15; i++) {
      let distRow = [],
        prevRow = [];
      for (let j = 0; j < 50; j++) {
        distRow.push(Infinity);
        prevRow.push([i, j]);
      }
      dist.push(distRow);
      prev.push(prevRow);
    }
  
    dist[start[0]][start[1]] = 0;
  
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
      let sz = queue.length;
      const [x1, y1] = queue[0];
      let dis = distance(x1, y1, end[0], end[1]);
      let index = 0;
      for (let j = 1; j < sz; j++) {
        let [x1, y1] = queue[j];
        if (dis > distance(x1, y1, end[0], end[1])) {
          dis = distance(x1, y1, end[0], end[1]);
          index = j;
        }
      }
      let temp = queue[0];
      queue[0] = queue[index];
      queue[index] = temp;
      let curr = queue.shift();
      setTimeout(() => isVisited(curr), 0);
      if (curr[0] === end[0] && curr[1] === end[1]) {
        curr = prev[curr[0]][curr[1]];
        while (true) {
          let temp = curr;
          setTimeout(() => isPath(temp), 0);
          if (curr === start) {
            break;
          }
          curr = prev[curr[0]][curr[1]];
        }
        return;
      }
      for (let i = 0; i < 4; i++) {
        let next = [curr[0] + dx[i], curr[1] + dy[i]];
        if (
          next[0] >= 0 &&
          next[0] < 15 &&
          next[1] >= 0 &&
          next[1] < 50 &&
          !grid[next[0]][next[1]].isWall &&
          !grid[next[0]][next[1]].isVisited &&
          !grid[next[0]][next[1]].isExplored &&
          dist[next[0]][next[1]] > 1 + dist[curr[0]][curr[1]]
        ) {
          queue.push(next);
          prev[next[0]][next[1]] = curr;
          dist[next[0]][next[1]] = 1 + dist[curr[0]][curr[1]];
          setTimeout(() => isExplored(next), 0);
        }
      }
    }
    setTimeout(() => isPath(start), 0);
  }
  
  export default GreedyBFS;
  