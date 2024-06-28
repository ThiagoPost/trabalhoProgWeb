CREATE TABLE Carro (
    id_carro SERIAL PRIMARY KEY NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    cor VARCHAR(50) NOT NULL,
    placa VARCHAR(10) NOT NULL UNIQUE,
    preco_locacao_dia DECIMAL(10, 2) NOT NULL,
    disponibilidade BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO Carro (Modelo, Marca, Ano, Cor, Placa, preco_locacao_dia, Disponibilidade)
VALUES 
('Civic', 'Honda', 2020, 'Preto', 'ABC-1234', 150.00, TRUE),
('Corolla', 'Toyota', 2019, 'Branco', 'DEF-5678', 140.00, TRUE),
('Onix', 'Chevrolet', 2018, 'Vermelho', 'GHI-9012', 130.00, TRUE),
('Focus', 'Ford', 2021, 'Azul', 'JKL-3456', 160.00, TRUE),
('Sandero', 'Renault', 2017, 'Prata', 'MNO-7890', 120.00, FALSE);