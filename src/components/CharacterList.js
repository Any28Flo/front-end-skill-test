import React, {useState, useEffect, useContext} from "react"
import {Row, Container} from 'reactstrap'
import styled from 'styled-components'
import CharacterService from "./../services/charactersServices"
import CharacterCard from "./CharacterCard";
import PaginationComponent from "./PaginationComponent";
import Spinner from "./Spinner";
import AppContext from "./../context";

//Display the number of movie displayed per page
let numberCharactersPerPage = 5;

const CharacterList = () =>{
    const { characterList, setCharacterList  } = useContext(AppContext);
    {
        characterList.length === 1 ?    numberCharactersPerPage = 1 :   numberCharactersPerPage = 5;
    }


    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(numberCharactersPerPage);
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacter = characterList.slice(indexOfFirstCharacter,  indexOfLastCharacter);
    const characterServices = new CharacterService();
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const getCharacters = () =>{
        characterServices.getCharacters()
        .then(responseFromApi =>{
            setCharacterList(responseFromApi.data.results)
        })
    }
    useEffect( () =>{
        getCharacters()

    }, [])

    if( characterList < 1 ) return <Spinner/>
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
                        totalCharacters={characterList.length}
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