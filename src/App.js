import React, {useState} from 'react';
import './App.css';
import PokeCard from './PokeCard.js';

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [next, setNext] = useState("")
  const [previous, setPrevious] = useState("")
  const showPokemon = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results)
        setNext(data.next)
        setPrevious(data.previous)
      })
  }

  window.onload = () => showPokemon("https://pokeapi.co/api/v2/pokemon")
  
  const pokemonCards = pokemonList.map((individualPokemon, i) => 
    <PokeCard key={i} 
    name={individualPokemon.name} 
    url={individualPokemon.url}/>)
  
    
    return(
    <div className="App">
      <div className="catch-phrase"><h2>Gotta catch them all!</h2></div>
      <button onClick = {() => showPokemon(next)}>Next</button>
      <button onClick = {() => showPokemon(previous)}>Previous</button>
      {pokemonCards}
    </div>
  )
}

export default App;
