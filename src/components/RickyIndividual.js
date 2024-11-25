import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
//import { ClimbingBoxLoader } from 'react-spinners'


export default function RickyIndividual() {
  const [individual, setIndividual] = useState([])
  const [isLoading, setIsLoaiding] = useState(true)
  const { id } = useParams()

  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((response) => setIndividual(response))
    .then(() => setIsLoaiding(false))

//Con SweetAlert
  if (isLoading) {
    Swal.fire({ title: "Cargando datos..." })
    Swal.showLoading()
  }

  //Con react-spinners
  /* if (isLoading) {
    return (
      <div>
        <h1>Cargando Datos...</h1>
        <ClimbingBoxLoader    //https://www.npmjs.com/package/react-spinners
          color={"#36d7b7"}
          loading={true}
          size={50}
        />
      </div>
    )
  } */

  return (

    <div className='padreindividual'>
      <div className='hijoindividual'>
        <img src={individual.image} alt={individual.name} />
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
