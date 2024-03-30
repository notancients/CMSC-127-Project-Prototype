CREATE DATABASE sampledatabase;
USE sampledatabase;


CREATE TABLE user (
    user_id integer PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    
);
CREATE TABLE food (
    food_id integer PRIMARY KEY AUTO_INCREMENT,
    food_name VARCHAR(255) NOT NULL,
);
CREATE TABLE food_image (
    food_image_id integer PRIMARY KEY AUTO_INCREMENT,
    food_id integer FOREIGN KEY REFERENCES Food(food_id),
    link VARCHAR(255) NOT NULL,
);
-- CREATE VIEW food_view
CREATE TABLE establishment (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TABLE review (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);