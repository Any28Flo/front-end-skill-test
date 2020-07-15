import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import CharacterService from "./../services/charactersServices"
import CharacterCard from "./CharacterCard";
import 'bulma/css/bulma.css'
import './../index.css'
const CharacterList = () =>{
    const [characters, setCharacters ]= useState([]);
    const characterServices = new CharacterService();

    const getCharacters = () =>{
        characterServices.getCharacters()
        .then(responseFromApi =>{
            setCharacters(responseFromApi.data.results)
        })
    }
    useEffect( () =>{
        getCharacters()

    }, [])
    return (
        <CharactersGrid>
            {
                characters.map((character, id) =>(
                    <CharacterCard key={id } character={character}  />
                ))
            }
        </CharactersGrid>
    )

}
const CharactersGrid = styled.div`
  display: grid;
  padding: 5rem;
  grid-template-columns: repeat(2 , 2fr);
  grid-row-gap: 5rem;
  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;
export default CharacterList