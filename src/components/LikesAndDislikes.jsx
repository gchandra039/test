import React, { useState } from 'react';

function LikesAndDislikes(props) {
  
  let [L,setL] = React.useState(0);
  let [D,setD] = React.useState(0);
  

  function like(){
    setL(L+1)
  }

  function dislike(){
    setD(D+1)
   }

  function rst(){
    setD(0)
    setL(0)
  }
  return (
    <div>
      <h1>Likes {L} </h1> &nbsp;&nbsp;&nbsp;
      <h1>Dislikes {D}</h1> &nbsp;&nbsp;&nbsp;
      <button onClick={like}>Like</button> &nbsp;&nbsp;&nbsp;
      <button onClick={dislike}>Dislike</button> &nbsp;&nbsp;&nbsp;
      <button onClick={rst}>Reset</button> 
    </div>

  );
}

export default LikesAndDislikes;