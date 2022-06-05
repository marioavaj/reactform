
import { useState } from 'react';
import './App.css';
import Formular from './Formular';


function App() {
  const [movies, addMovie] = useState([JSON.parse(localStorage.getItem("movies"))]);
    
 

  return (<Formular addNewMovie={addMovie}/>)

}

export default App;
