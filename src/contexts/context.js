import React, {useEffect, useState} from 'react'
import CharacterService from "../services/charactersServices"

const Context = React.createContext({})

export function AppContext ({children}) {
    const [characterList, setCharacterList] = useState([])
    const characterServices = new CharacterService();

    const getCharacters = () =>{
        characterServices.getCharacters()
            .then(responseFromApi =>{
                setCharacterList(responseFromApi.data.results)
            })
    }
    useEffect( () =>{
        getCharacters()

    }, [])

    return <Context.Provider value={{characterList, setCharacterList}}>
        {children}
    </Context.Provider>
}

export default Context