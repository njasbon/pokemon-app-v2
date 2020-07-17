import React, {useState, useEffect} from 'react';
import './PokeCard.css';

function PokeCard(props){
    const [pokeImageUrl, setPokeImageUrl] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(data =>{
            setPokeImageUrl(data.sprites.front_default)
            setHeight(data.height)
            setWeight(data.weight)
        })
    }, [props.url])
    return(
        <div className="poke-card">
            <h4>{props.name}</h4>
            <div>
                <img src={pokeImageUrl} />
                <div className="poke-details">Height: {height}</div>
                <div className="poke-details">Weight: {weight}</div>
            </div>
            
        </div>
    )
}

export default PokeCard;

