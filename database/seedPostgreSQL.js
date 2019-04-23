const { Client } = require('pg');
const client = new Client()

client.connect();

client.query()

//use copy

//might need to make a table before you use. 

// COPY books
// FROM './data/books.csv'
// CSV HEADER;