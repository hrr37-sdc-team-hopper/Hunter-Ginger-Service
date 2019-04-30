const newrelic = require("newrelic");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const db = require("../database/index.js");

app.locals.newrelic = newrelic;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/books/:id", express.static(path.join(__dirname, "../public")));

app.get("/books/:id/authors/title", async (req, res) => {
  const title = await db.getBook(req.params.id);
  res.json(title.rows);
});

app.get("/books/:id/authors/:id", async (req, res) => {
  const author = await db.getAuthor(req.params.id);
  res.json(author.rows);
});

app.get("/books/:id/authors/:id/titles", async (req, res) => {
  const books = await db.getAuthorTitles(req.params.id);
  res.json(books.rows);
});

app.post("/books/:id/authors/status", async (req, res) => {
  const status = await db.updateStatus(req.body.status, req.body.id);
  res.send(status.rows);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
