import React, {useState} from 'react'

const Context = React.createContext({})

export function AppContext ({children}) {
    const [characterList, setCharacterList] = useState([])

    return <Context.Provider value={{characterList, setCharacterList}}>
        {children}
    </Context.Provider>
}

export default Context