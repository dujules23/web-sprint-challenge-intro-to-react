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
    axios.get(`https://swapi.dev/api/films/4/`)
      .then((res) => {
      setFilms(res.data)
      // setFilms(
      //   films.map( character => {
      //     console.log('hello')
      //     const character = res.data.characters
      //     return character ? <Character />
      // })
      // )
      console.log("success!", res.data);
    })
    .catch((error) => console.log("Error!", error));
  }, []);
  

  // console.log(films)
  return (
    
    <Character/>
    
  );
}

export default App;
