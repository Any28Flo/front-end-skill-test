import React, {useState} from "react";

const Context = React.createContext({});

export function RequestContext({children}) {
    const [urlObject , setUrlObject] = useState({})
    return <Context.Provider value={{urlObject, setUrlObject}}>
        {children}
    </Context.Provider>

}
export default Context