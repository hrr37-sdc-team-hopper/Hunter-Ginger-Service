const { Pool, Client } = require("pg");
const config = require("./config");
const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port
});

//const mysql = require("mysql");
//const config = require("./config");

//const pool = mysql.createpool(config);

pool.connect(err => {
  if (err) throw err;
  console.log("connected");
});

const search = (search, values) =>
  new Promise((resolve, reject) => {
    pool.query(search, values, (err, insert) => {
      if (err) return reject(err);
      resolve(insert);
    });
  });

const addBook = value =>
  search(
    "INSERT INTO books (title, description, author_id, published_year, cover, status) VALUES ($1, $2, $3, $4, $5, $6)",
    [
      value.title,
      value.description,
      value.author_id,
      value.published_year,
      value.cover,
      value.status
    ]
  );

const addAuthor = value =>
  search(
    "INSERT INTO authors (name, details, profile_pic, followers) VALUES ($1, $2, $3, $4)",
    [value.name, value.details, value.profile_pic, value.followers]
  );

const getBook = id => search(`SELECT * FROM books WHERE id =${id}`);

const getAuthor = id => search(`SELECT * FROM authors WHERE id =${id}`);

const getAuthorTitles = id =>
  search(`SELECT * FROM books WHERE author_id =${id}`);

const updateStatus = (status, id) =>
  search(`UPDATE books SET status = $1 WHERE id = $2`, [status, id]);

const close = () => {
  pool.end();
};

module.exports = {
  addBook,
  addAuthor,
  getBook,
  getAuthor,
  getAuthorTitles,
  updateStatus,
  close
};
