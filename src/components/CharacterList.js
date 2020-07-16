import React, {useState, useEffect} from "react"
import {Row, Container} from 'reactstrap'

import styled from 'styled-components'
import CharacterService from "./../services/charactersServices"
import CharacterCard from "./CharacterCard";
import PaginationComponent from "./PaginationComponent";
import Spinner from "./Spinner";

//Display the number of movie displayed per page
let numberCharactersPerPage = 5;

const CharacterList = () =>{
    const [characters, setCharacters ]= useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(numberCharactersPerPage);
    const indexOfLastMovie = currentPage * charactersPerPage;
    const indexOfFirstMovie = indexOfLastMovie - charactersPerPage;
    const currentCharacter = characters.slice(indexOfFirstMovie,  indexOfLastMovie);
    const characterServices = new CharacterService();
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const getCharacters = () =>{
        characterServices.getCharacters()
        .then(responseFromApi =>{
            setCharacters(responseFromApi.data.results)
        })
    }
    useEffect( () =>{
        getCharacters()

    }, [])

    if( characters < 1 ) return <Spinner/>
    return (
        <Container>
            <Row xs="12" sm="12" md="12" lg="12">
                <Grid>
                    {
                        currentCharacter.map((character, id) =>(
                            <CharacterCard key={id} character={character}  />
                        ))
                    }
                </Grid>
            </Row>
            <Row xs="12" sm="12" md="12" lg="12">
                    <PaginationComponent
                        charactersPerPage={charactersPerPage}
                        totalCharacters={characters.length}
                        paginate={paginate}
                    />
            </Row>
        </Container>
    )
}
const Grid = styled.div`
  display: grid;
  padding: 5rem;
  grid-template-columns: repeat(2 , 2fr);
  grid-row-gap: 2em;
  @media (max-width: 768px) {
   grid-template-columns: repeat(1 , 2fr);
  }
`;

export default CharacterList