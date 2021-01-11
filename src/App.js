import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [films, setFilms] = useState([]);
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/films/7/`)
      .then((res) => {
      setFilms(res.data.characters)
      // setFilms(
      //   films.map( (character) => {
      //     console.log('hello')
      //     const character = res.data.characters
      //     return character ? <Character />
      // }))
      //
      console.log("success!", res.data.characters);
    })
    .catch((error) => console.log("Error!", error));
  }, []);
  

  // console.log(films)
  return (
    
    <Character characters={films}/>
    
  );
}

export default App;
