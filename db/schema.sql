CREATE DATABASE dbBurger;
USE dbBurger;

CREATE TABLE Burger
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
  date TIMESTAMP
);
