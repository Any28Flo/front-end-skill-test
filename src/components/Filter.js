import React, {useContext, useEffect, useState} from "react";
import {Col, Container, Row, Button} from "reactstrap"
import useDropdown from "../hooks/useDropdown";
import AppContext from "./../context";
const querystring = require("querystring");

const Filter = () =>{
    const { characterList, setCharacterList  } = useContext(AppContext);
    const [species , setSpecies] = useState([]);
    const [specie, SpecieDropdown, setSpecie] = useDropdown( "", species, "Especie");

    const [listStatus , setListStatus] = useState([]);
    const [status, StatusDropdown, setStatus] = useDropdown("", listStatus, "Estatus");

    const [types , setTypes] = useState([]);
    const [type, TypeDropdown, setType] = useDropdown("", types, "Tipo");

    const [listGenre , setListGenre] = useState([]);
    const [genre, GenreDropdown, setGenre] = useDropdown("", listGenre, "Genéro");

    const createArray = (filter) => {
        let newArray = []
        characterList.forEach(character => newArray.push(character[filter]))
        const uniqueSet = new Set(newArray);
        return [...uniqueSet]
    }

    useEffect(() =>{
        setSpecies([]);
        setSpecie("");
        setSpecies(createArray("species"))

        setListStatus([])
        setStatus("")
        setListStatus(createArray("status").filter(Boolean))

        setTypes([]);
        setType("");
         setTypes(createArray("type").filter(Boolean))

        setListGenre([])
        setGenre("")
        setListGenre(createArray("gender").filter(Boolean))

    }, [])

    const handleClick = e =>{
        let urlObject ={
            species : specie,
            status : status,
            type : type,
            gender : genre
        }
        console.log(urlObject)
        // Use the stringify() method on the object
        let parsedQuery = querystring.stringify(urlObject);

        console.log("Parsed Query:", parsedQuery);
    }
    return(
        <Container>
            <Row>
                <Col>
                    <SpecieDropdown/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <StatusDropdown/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TypeDropdown/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GenreDropdown/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={handleClick}> Buscar </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Filter;