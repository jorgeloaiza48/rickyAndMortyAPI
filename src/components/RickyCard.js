import React from 'react'
//import { useState } from 'react';
//import RickyIndividual from './RickyIndividual'
import { Link } from "react-router-dom";

function RickyCard({ character }) {
    

    return (
        <div className='card'>
            <img src={character.image} alt={character.name} />
            <div className='card-body'>
               {/*  <h5 className='card-title'>{character.name}</h5> */}
                <Link to={`/individual/${character.id}`}>
                    <button className='btn' key={character.id} >Detalles</button>
                </Link>
                {/*  {buttonClicked && <RickyIndividual />} */}
                {/* {buttonClicked ? <RickyIndividual id={character.id} /> : null} */}
            </div>
        </div>
    )
}

export default RickyCard
