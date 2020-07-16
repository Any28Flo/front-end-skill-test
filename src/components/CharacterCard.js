import React  from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import './../index.css'
import Overdrive from 'react-overdrive'

const CharacterCard  = ({character}) => {
    const {id,name,status,type,gender, image} = character;
    if (!character) return null;

    return(
        <div>
            <Link to={`/character/${id}`}>
                <Overdrive id={`${character.id}`}>

                    <div id="container">
                        <div className="card-image">
                            <img
                                src={image}
                                alt={`/${id}`}/>
                        </div>

                        <div className="card-details">
                            <h1>{name}</h1>
                            <p >{`Estatus : ${status}` } </p>
                            <p >{`Tipo : ${type ? type : 'desconocido'}` } </p>
                            <p >{`Genre : ${gender}` } </p>
                        </div>

                    </div>


                </Overdrive>
            </Link>

        </div>
    )
}

//Define default props
CharacterCard.propTypes={
    character : PropTypes.shape({
        name : PropTypes.string.isRequired,
        status : PropTypes.string,
        type : PropTypes.string,
        image : PropTypes.string,
        gender : PropTypes.string,
        id: PropTypes.number.isRequired
    }).isRequired,
}

export default CharacterCard;