import React, {useContext, useState} from "react"
import  RequestContext from "../contexts/reqContext"

const useDropdown = ( defaultState, options,description,value) =>{

        const [state , setState] = useState(defaultState);
        const { urlObject,setUrlObject} = useContext(RequestContext)

        const id= `dropdown-${description.replace(" " ,"").toLocaleLowerCase()}`;
        const handleChange = e =>{
                setState( e.target.value)
                setUrlObject({ ...urlObject, [e.target.name]: (e.target.value).toLowerCase() })
        }
        const Dropdown = () =>(

                <select
                    id={id}
                    name={value}
                    value={state}
                    onChange={ handleChange}
                    onBlur={ e => setState(e.target.value)}
                    disabled={options.length === 0}
                >
                    <option>{description}</option>
                    {
                        options.map( option =>(
                            <option key={option} value={option}>
                                {option}
                            </option>

                        ))
                    }
                </select>

        );
        return [state , Dropdown, setState];
};
export default useDropdown;