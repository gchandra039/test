import React, { useState } from "react";



function TestComp(props) {
  var [y,sety] = useState()

  function test(event){
    sety (event.target.value)
    
  }
  return (
    <div>
      <input type="text" name="" id="" onChange={test} />
      <h1 id="d3">{y}</h1>
    </div>
  );
}

export default TestComp;