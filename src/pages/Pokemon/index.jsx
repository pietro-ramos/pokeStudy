import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Pokemon.module.css';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/')
            .then((response) => {
                setPokemon(response.data.results);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className={styles.pokemon}>
            {pokemon.map((poke, index) => (
                <div key={index}>
                    <h2>{poke.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default Pokemon;