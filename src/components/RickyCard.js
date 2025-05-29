import React from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // ícono de carrito
import { Link } from 'react-router-dom';
import './ricky.css'

function RickyCard({ character }) {
  return (
    <div className='card'>
      <img src={character.image} alt={character.name} />
      <div className='card-body'>
        {/* <h5 className='card-title'>{character.name}</h5> */}
        <Link to={`/individual/${character.id}`}>
          <button className='btn-details' key={character.id}>
            <FaInfoCircle className='btn-icon' />
            Ver detalles
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RickyCard;

