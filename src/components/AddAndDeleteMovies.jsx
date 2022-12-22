import React, { useState, useTransition } from 'react';


function AddAndDeleteMovies(props) {

  const [movies,setmovies] = useState([])
  const [newmovie,setnewmovie] = useState()

  function newfilm(e){
    setnewmovie(e.target.value);
  }

  function addmovie(){
    setmovies([...movies,newmovie])
  }

  function deletemovie(i){
    var temp = [...movies];
    temp.splice(i,1);
    setmovies([...temp])
  }


  return (
    <div>
      <input type="text" onChange={newfilm}/>
      <button onClick={addmovie}>Add Movie</button>
      {
        movies.map(function(m,i){
          return <li>{m} <button onClick={()=>{deletemovie(i)}}>Delete</button></li>
})
      }
        
      
    </div>
  );
}

export default AddAndDeleteMovies;    