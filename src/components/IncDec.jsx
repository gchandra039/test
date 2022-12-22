import React from 'react';

function IncDec(props) {

  var [i,seti] = React.useState(0)
  

  
  function inc(){
    seti(i+1);
  }
  function dec(){
    seti(i-1);
  }
  function rst(){
    seti(0)

  }


  return (
    <div>
      <h1>{i}</h1>
      <button onClick={inc}>Increment</button>
     
      <button onClick={dec}>decrement</button>
     
      <button onClick={rst}>Reset</button>
    </div>
  );
}

export default IncDec;