import { useEffect, useState } from 'react';
import CarTable from '../../components/CarTable';
import Link from 'next/link';
import styles from '../styles/CarTable.module.css'; // Adicione um novo arquivo CSS para estilos específicos

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('/api/test-connection');
      const data = await response.json();
      setCars(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cars:', error);
      setError('Failed to load cars');
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "25px",
        marginTop: "4px%",
        marginBottom: "20px"
      }}>
        <h1>Lista de Carros</h1>
        
      </div>
      <CarTable cars={cars} />
    </div>
  );
};

export default Cars;
