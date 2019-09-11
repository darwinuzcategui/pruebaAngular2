CREATE DATABASE IF NOT EXISTS nomina;

USE nomina;

CREATE TABLE empleado (
id INT(11) NOT NULL AUTO_INCREMENT,
nombre varchar(45) DEFAULT NULL,
salario INT(11) DEFAULT NULL,
PRIMARY KEY(id)
);

DESCRIBE empleado;

INSERT INTO empleado VALUES
(1,'Darwin Uzcategui',125000),
(2,'Jose Pedez',25000),
(3,'Luis Camacho',12000);

SELECT * FROM empleado;