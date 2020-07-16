import React, {useState, useContext} from "react"
import {Link} from "react-router-dom";
import {Input,Row, Col, Container, Button} from "reactstrap";
import AppContext from "./../context";
const SearchBar = () =>{
    const { characterList, setCharacterList  } = useContext(AppContext);

    const [strSearch, setStrSearch] = useState('')

    const handleChange = e =>{
        setStrSearch(e.target.value)
        let strToSearch = capitalize_Words(strSearch)
        const newArray = characterList.filter(element => element.name.includes(strToSearch) )
        setCharacterList(newArray)
    }
    function capitalize_Words(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    const handleClick = e =>{

        setStrSearch('');
    }
    return(
        <Container>
            <Row>
                <Col sm={12} md={12} lg={10}>
                    <Input type="text" name="strToSearch"  onChange={handleChange} value={strSearch}/>
                </Col>
                <Col sm={12} md={12} lg={2}>
                    <Link to="/filter">
                        <Button color="danger" onClick={handleClick}>Filtrar</Button>
                    </Link>
                </Col>

            </Row>
        </Container>
    )

}
export default SearchBar