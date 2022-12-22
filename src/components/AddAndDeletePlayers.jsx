import React, { useCallback, useState, useTransition } from 'react';


function AddAndDeletePlayers(props) {

    const [player,setplayer] = useState(['Kiran','Ravi'])
    const [newplayer,setnewplayer] = useState()

    function newplay (e){
      setnewplayer(e.target.value)
    }

    function addplayer(){
      setplayer([...player,newplayer])
    }

    function deleteplayer(i){
      var temp = [...player]
      temp.splice(i,1)
      setplayer([...temp])

    }


  return (
    <div>
      
      <input type="text" onChange={newplay}/>
      <button onClick={addplayer}>Add Player</button>
      {
        player.map(function(p,i){
          return <li>{p} <button onClick={()=>{deleteplayer(i)}}>Delete Player</button></li>
        })
      }
    </div>
  );
}



import React from 'react';

function 
3























































(props) {
  return (
    <div>
      
    </div>
  );
}

export default 
3























































;

export default AddAndDeletePlayers;



