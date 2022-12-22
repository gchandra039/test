import React, {component} from 'react';
import AddStudent from './AddStudent';
import AddAndDeleteMovies from './components/AddAndDeleteMovies';
import AddAndDeletePlayers from './components/AddAndDeletePlayers';
//import './App.css';
import FirstComp from './components/FirstComponent';
import Header from './components/Header';
import IncDec from './components/IncDec';
import LikesAndDislikes from './components/LikesAndDislikes';
import TestComp from './components/TestComp';
import Main from './Main';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    <>
        <div  className ="center">
          <FirstComp/>
          <Header/>
          <Main/>
          <TestComp/>
          <IncDec/>
          <LikesAndDislikes/>
          <AddStudent/> <br/>
          <AddAndDeletePlayers/> <br/>
          <AddAndDeleteMovies/>
        </div>
    </>
    
  );
}

export default App;
