
import { useState } from 'react';
import './App.css';
import Formular from './Formular';


function App() {
 const [movies, addMovie] = useState([]);
  
 if (movies.length === 0){
  JSON.parse(localStorage.getItem("movies"))

 }
  
  

  return (
  <>
  <Formular addNewMovie={addMovie}/>
  
  <div id="wrapper">
  <div>Názov filmu:</div>
  <div>užívateľ:</div>
  <div>Email:</div>
  <div>Recenzia:</div>
  <div>Dátum:</div>
  <div>Hornotenie:</div>
  </div>

    {movies.map( e => { return (
      <div className = "addedMovies">
    <div> {e.movieName}</div>
    <div>{e.nick}</div>
    <div>{e.email}</div>
    <div>{e.review}</div>
    <div>{e.date}</div>
    <div>{e.rating} %</div>
    </div> 
    )})}
  
  </>
    
  )

}

export default App;
