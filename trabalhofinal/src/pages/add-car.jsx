import { useRouter } from 'next/router';
import CarForm from '../../components/CarForm';
import styles from '../../src/styles/AddCar.module.css';

const AddCar = () => {
  const router = useRouter();

  const handleAddCar = async (car) => {
    try {
      const response = await fetch('/api/test-connection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      });

      if (response.ok) {
        router.push('/cars');
      } else {
        console.error('Failed to add car');
      }
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 style={{
        fontWeight: "bold",
        fontSize: "30px"
      }}>Cadastrar Novo Carro</h1>
      <CarForm onSubmit={handleAddCar} />
    </div>
  );
};

export default AddCar;
