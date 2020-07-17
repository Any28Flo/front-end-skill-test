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
    getDetailCharacter = (numCharacter) =>{
        return this.service.get(`/character/${numCharacter}`)
            .then(res => res)
            .catch(e => console.log(e))
    }
    customGet = (urlObject) =>{
        return this.service.get(`/character/?${urlObject}`)
            .then(res => res.data)
            .catch(e =>console.log(e))
    }


}
export default CharactersServices