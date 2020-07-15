import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import CharacterList from "../../components/CharacterList";
const AllCharacters = () =>{
    return (
        <div>
            <div className="container">
                <NavBar/>
                <CharacterList/>
            </div>
        </div>
    )
}
export  default AllCharacters