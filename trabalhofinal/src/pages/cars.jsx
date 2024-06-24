// pages/cars.js
import { useEffect, useState } from 'react';
import CarTable from '../../components/CarTable';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/test-connection')
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
        setError('Failed to load cars');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <h1 style={{
            fontSize: 45,
            fontWeight: 'bold',
        }}>Lista de Carros</h1>
      <div >
        <CarTable cars={cars} />
      </div>

    </div>
  );
};

export default Cars;
