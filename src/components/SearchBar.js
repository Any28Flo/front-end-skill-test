import React, {useState, useContext} from "react"
import {Input,Row, Col, Container, Button} from "reactstrap";
import AppContext from "./../context";
const SearchBar = () =>{
    const { characterList, setCharacterList  } = useContext(AppContext);

    const [strSearch, setStrSearch] = useState([])

    const handleChange = e =>{
        setStrSearch(e.target.value)

    }
    function capitalize_Words(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    const handleClick = e =>{
        let strToSearch = capitalize_Words(strSearch)
        const newArray = characterList.filter(element => element.name === strToSearch)
        setCharacterList(newArray)
        //setCharacterList({...characterList , characterList:newArray})
    }
    return(
        <Container>
            <Row>
                <Col sm={12} md={12} lg={10}>
                    <Input type="text" name="strToSearch"  onChange={handleChange} value={strSearch}/>
                </Col>
                <Col sm={12} md={12} lg={2}>
                    <Button color="danger" onClick={handleClick}>Filtrar</Button>
                </Col>

            </Row>
        </Container>
    )

}
export default SearchBar