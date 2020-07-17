import React, {useContext, useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';

import {Col, Container, Row, Button} from "reactstrap"
import useDropdown from "../hooks/useDropdown";
import AppContext from "../contexts/context";
import  RequestContext from "../contexts/reqContext"
import CharactersServices from "../services/charactersServices";

const querystring = require("querystring");

const Filter = () =>{

    const { characterList,setCharacterList  } = useContext(AppContext);
    const { urlObject,setUrlObject} = useContext(RequestContext)

    const [species , setSpecies] = useState([]);
    const characterServices = new CharactersServices();
    const [specie, SpecieDropdown, setSpecie] = useDropdown( "", species, "Especie", "species");

    const [listStatus , setListStatus] = useState([]);
    const [status, StatusDropdown, setStatus] = useDropdown("", listStatus, "Estatus" , "status");

    const [types , setTypes] = useState([]);
    const [type, TypeDropdown, setType] = useDropdown("", types, "Tipo", "type");

    const [listGenre , setListGenre] = useState([]);
    const [genre, GenreDropdown, setGenre] = useDropdown("", listGenre, "Genéro", "gender");
    const history = useHistory();

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
        let parsedQuery = querystring.stringify(urlObject);
        characterServices.customGet(parsedQuery)
            .then( data =>{
                setCharacterList(data.results)
                history.push("/");
            })
            .catch( error => console.log(error))

             setUrlObject({})

    }
    return(
        <Container>
            <Row>
                <Col>
                    <SpecieDropdown />
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