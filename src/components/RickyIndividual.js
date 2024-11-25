import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function RickyIndividual() {
  const [individual, setIndividual] = useState([])

  const { id } = useParams()
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((response) => setIndividual(response))

  return (

    <div className='padreindividual'>
      <div className='hijoindividual'>
        <img className="imagenhijo" src={individual.image} alt={individual.name} />
        <h1>Id: {individual.id}</h1>
        <p>Nombre: {individual.name}</p>
        <p>Status: {individual.status}</p>
        <p>Especie: {individual.species}</p>
        <p>Gender: {individual.gender}</p>
        <center><Link to={"/"}><button>Regresar</button></Link></center>
      </div>
    </div>
  )
}
