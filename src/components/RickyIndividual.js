import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function RickyIndividual() {
  const [individual, setIndividual] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    Swal.fire({
      title: "Cargando datos...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setIndividual(data);
        setIsLoading(false);
        Swal.close();
      })
      .catch((error) => {
        Swal.fire('Error', 'No se pudieron cargar los datos', 'error');
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return null;

  if (!individual) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>No se encontró el personaje.</p>;

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '480px',
        margin: '2rem auto',
        backgroundColor: '#1e1e2f',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        color: '#fff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <img
        src={individual.image}
        alt={individual.name}
        style={{
          width: '100%',
          borderRadius: '12px',
          marginBottom: '1rem',
          boxShadow: '0 4px 15px rgba(255,255,255,0.2)',
          objectFit: 'cover',
        }}
      />
      <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2rem' }}>{individual.name}</h1>

      <div style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
        <p><strong>Id:</strong> {individual.id}</p>
        <p><strong>Status:</strong> {individual.status}</p>
        <p><strong>Especie:</strong> {individual.species}</p>
        <p><strong>Género:</strong> {individual.gender}</p>
      </div>

      <Link to="/" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <button
          style={{
            backgroundColor: '#ff4c60',
            border: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '30px',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 6px 15px rgba(255, 76, 96, 0.5)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e94353'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ff4c60'}
        >
          Regresar
        </button>
      </Link>
    </div>
  );
}

