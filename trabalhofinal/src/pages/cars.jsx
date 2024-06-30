import { useState, useEffect } from 'react';
import CarTable from '../../components/CarTable';


const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/test-connection');
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  const handleDeleteCar = async (id) => {
    try {
      const response = await fetch('/api/test-connection', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setCars(cars.filter(car => car.id_carro !== id));
      } else {
        console.error('Failed to delete car');
      }
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

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
      <CarTable cars={cars} onDelete={handleDeleteCar} />
    </div>
  );
};

export default Cars;
