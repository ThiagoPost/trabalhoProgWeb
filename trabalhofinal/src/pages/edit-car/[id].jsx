import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CarForm from '../../../components/CarForm';


const EditCar = () => {
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchCar();
    }
  }, [id]);

  const fetchCar = async () => {
    try {
      const response = await fetch(`/api/cars/${id}`);
      const data = await response.json();
      setCar(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching car:', error);
      setLoading(false);
    }
  };

  const handleEditCar = async (updatedCar) => {
    try {
      const response = await fetch(`/api/cars/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCar),
      });

      if (response.ok) {
        router.push('/cars');
      } else {
        console.error('Failed to update car');
      }
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
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
        <h1>Editar Carro</h1>
      </div>
      {car && <CarForm initialData={car} onSubmit={handleEditCar} />}
    </div>
  );
};

export default EditCar;
