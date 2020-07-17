import  React, {useState} from "react"

const useDropdown = ( defaultState, options,description) =>{
        const [state , setState] = useState(defaultState);
        const id= `dropdown-${description.replace(" " ,"").toLocaleLowerCase()}`;
        const Dropdown = () =>(

                <select
                    id={id}
                    name={description}
                    value={state}
                    onChange={ e => setState( e.target.value)}
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