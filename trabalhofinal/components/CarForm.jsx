import { useState } from 'react';
import styles from '../src/styles/CarForm.module.css';


const CarForm = ({ onSubmit }) => {
  const [car, setCar] = useState({
    modelo: '',
    marca: '',
    ano: '',
    cor: '',
    placa: '',
    preco_locacao_dia: '',
    disponibilidade: true,
  });

  //console.log(car.modelo)
  //console.log(car.marca)
  //console.log(car.cor)
  //console.log(car.ano)

  //altera o valor das variaveis no momento em que são digitadas
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(car);
    setCar({
      modelo: '',
      marca: '',
      ano: '',
      cor: '',
      placa: '',
      preco_locacao_dia: '',
      disponibilidade: true,
    });
  };

  return (
    <form className={styles.carForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Modelo: </label>
        <input type="text" name="modelo" value={car.modelo} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Marca: </label>
        <input type="text" name="marca" value={car.marca} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Ano: </label>
        <input type="number" name="ano" value={car.ano} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Cor: </label>
        <input type="text" name="cor" value={car.cor} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Placa: </label>
        <input type="text" name="placa" value={car.placa} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Preço Locação Dia: </label>
        <input type="number" name="preco_locacao_dia" value={car.preco_locacao_dia} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label>Disponibilidade: </label>
        <select name="disponibilidade" value={car.disponibilidade} onChange={handleChange} required>
          <option value={true}>Disponível</option>
          <option value={false}>Indisponível</option>
        </select>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CarForm;
