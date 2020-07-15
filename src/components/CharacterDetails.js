import React, {useEffect, useState} from "react";
import {Row, Col, Container} from 'reactstrap';
import Overdrive from 'react-overdrive'

import CharactersServices from "../services/charactersServices";
import NavBar from "./NavBar/NavBar";
import Spinner from "./Spinner";
const CharacterDetails = (props) =>{

    const [characterDetails, setCharacterDetails] = useState([]);
    const characterServices = new CharactersServices();
    const getDetailCharacter = () =>{
        characterServices.getDetailCharacter(props.match.params.id)
            .then(data =>{
                setCharacterDetails(data.data)
            })
    }

    useEffect( () =>{
        getDetailCharacter()
    }, [])
    if( characterDetails < 1 ) return <Spinner/>
    const {name, species, status, type, gender, image, id} = characterDetails
    return(
        <Container>
            <Row>
                <NavBar/>
            </Row>
            <Row>
                <Col xs="12" md="8">

                <p>{`Especie ${species}`}</p>
                    <p>{`Nombre: ${name}`}</p>
                    <p>{`Estatus: ${status}`}</p>

                    <p>{`Tipo : ${type ? type : 'desconocido'}` }</p>
                    <p>{`Género: ${gender}`}</p>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <Overdrive id={id}>
                        <img
                            src={image}
                            alt={`character-${id}`}/>

                    </Overdrive>

                </Col>
            </Row>


        </Container>

    )
}
export default CharacterDetails