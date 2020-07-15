import axios from 'axios'

class CharactersServices{
    constructor() {
        let service = axios.create({
            baseURL : `${process.env.REACT_APP_API_URL}`
        });
        this.service = service;
    }
    getCharacters = () =>{
        return this.service.get('/character')
            .then(res => res)
            .catch(e => console.log(e))
    }

}
export default CharactersServices