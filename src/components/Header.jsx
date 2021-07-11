import React from "react";

function Header() {
  return (
    <header>
    <nav class="navbar navbar-light" style={{backgroundColor: 'gray'}}>
    <h1>Path Visualizer</h1>
    <h2 style={{ color: 'black'}}>Wall</h2>
    <h2 style={{ color: 'orange' }}>Explored</h2>
    <h2 style={{ color: 'blue' }}>Path</h2>
    <h2 style={{ color: 'red' }}>End</h2>
    <h2 style={{ color: 'yellow' }}>Visited</h2>
    <h2 style={{ color: 'green' }}>Start</h2>
       </nav>
    {/* <h2>Instructions:</h2>  
    <l>
        <li>Double Click to select Start Point(appears in Green)</li>
        <li>After selecting Start Point, Double Click to select End Point(appears in Red)</li>
        <li>Click and Drag to add impenetrable Walls(appears in Black)</li>
        <li>Select the desired Algorithm</li>
    </l> */}
    </header>
  );
}

export default Header;
