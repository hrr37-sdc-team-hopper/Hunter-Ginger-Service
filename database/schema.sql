DROP DATABASE IF EXISTS BookShelf;

CREATE DATABASE BookShelf;

USE BookShelf;

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title varchar(100),
    description varchar(1000),
    author_id int not null,
    published_year int not null,
    cover varchar(1000),
    status varchar(100)
);

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    name varchar(100),
    details varchar(10000),
    profile_pic varchar(1000),
    followers int NOT NULL
);
