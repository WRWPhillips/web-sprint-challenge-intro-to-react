import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import CharacterMaker from './components/Character';

// call character component Character
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter] = useState([]);
  let url = 'https://swapi.dev/api/people'
  useEffect(() =>{
      axios.get(url).then((response)=>{
          console.log(response);
          setCharacter(response.data);
          console.log(character);
      })
  }, []);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        character.map((e) => {
          return CharacterMaker(e);
        })
      }
    </div>
  );
}

export default App;
