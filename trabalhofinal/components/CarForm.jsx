import { useState, useEffect } from 'react';
import styles from '../src/styles/CarForm.module.css';

const CarForm = ({ initialData = {}, onSubmit }) => {
  const [car, setCar] = useState({
    modelo: '',
    marca: '',
    ano: '',
    cor: '',
    placa: '',
    preco_locacao_dia: '',
    disponibilidade: true,
    ...initialData,
  });

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
  };

  return (
    <form className={styles.carForm} onSubmit={handleSubmit}>
      <label>
        Modelo:
        <input type="text" name="modelo" value={car.modelo} onChange={handleChange} required />
      </label>
      <label>
        Marca:
        <input type="text" name="marca" value={car.marca} onChange={handleChange} required />
      </label>
      <label>
        Ano:
        <input type="number" name="ano" value={car.ano} onChange={handleChange} required />
      </label>
      <label>
        Cor:
        <input type="text" name="cor" value={car.cor} onChange={handleChange} required />
      </label>
      <label>
        Placa:
        <input type="text" name="placa" value={car.placa} onChange={handleChange} required />
      </label>
      <label>
        Preço Locação Dia:
        <input type="number" name="preco_locacao_dia" value={car.preco_locacao_dia} onChange={handleChange} required />
      </label>
      <label>
        Disponibilidade:
        <select name="disponibilidade" value={car.disponibilidade} onChange={handleChange} required>
          <option value={true}>Disponível</option>
          <option value={false}>Indisponível</option>
        </select>
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CarForm;

