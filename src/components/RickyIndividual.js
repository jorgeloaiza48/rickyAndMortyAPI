import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


export default function RickyIndividual() {
  const [individual, setIndividual] = useState([])

  const { id } = useParams()
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((response) => setIndividual(response))

  return (
    <div>
      <img src={individual.image} alt={individual.name} />
      <p>Nombre: {individual.name}</p>
      <p>Status: {individual.status}</p>
      <p>Especie: {individual.species}</p>
    </div>
  )
}
