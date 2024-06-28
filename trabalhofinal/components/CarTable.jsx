// components/CarTable.js
import styles from '../src/styles/CarTable.module.css';

const CarTable = ({ cars }) => {
  return (
    <table className={styles.carTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Ano</th>
          <th>Cor</th>
          <th>Placa</th>
          <th>Preço Locação Dia</th>
          <th>Disponibilidade</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id_carro}>
            <td>{car.id_carro}</td>
            <td>{car.modelo}</td>
            <td>{car.marca}</td>
            <td>{car.ano}</td>
            <td>{car.cor}</td>
            <td>{car.placa}</td>
            <td> R$: {car.preco_locacao_dia}</td>
            <td>{car.disponibilidade ? 'Disponível' : 'Indisponível'}</td>
            <td>
                <button className={styles.editButton}>Editar</button>
                <button className={styles.deleteButton}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarTable;
