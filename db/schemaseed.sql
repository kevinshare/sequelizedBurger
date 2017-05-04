CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    date_effected TIMESTAMP,
	PRIMARY KEY (id)
);
  
INSERT INTO burgers (id, burger_name, devoured, date_effected) VALUES (1, 'chicken', true, 0);

USE burgers_db;

CREATE TABLE burgersDevoured
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    date_effected TIMESTAMP,
	PRIMARY KEY (id)
);
USE burgers_db;
INSERT INTO burgersDevoured (id, burger_name, devoured, date_effected) VALUES (1, 'chicken', true, 0);
