import React, { useState } from 'react';

function Main(props) {
  var [x,setx]=React.useState()


  function abc(event) {
    console.log("Hello",event)
  }
  function displayName(event){
    setx(event.target.value)
    }
  
  
  return (
    <div>
      <div className='m-4 p-3 border border-2'>
      
      
        <h3>Main component</h3>
        <button onClick={abc}>Event Handling</button>
        <br />
        <input type="text" name=""  onChange={displayName}/>
        <h1 id="d1">{x}</h1>
      </div>
    </div>
  );
}

export default Main;

