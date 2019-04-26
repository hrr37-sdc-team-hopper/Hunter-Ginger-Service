const faker = require("faker");
const fs = require("file-system");
const coverPicture = "http://d37pd3xfja253q.cloudfront.net/books/sample-image-";
const profilePic = "http://d37pd3xfja253q.cloudfront.net/authors/sample-image-";
const datStatus = "Want to Read";
const stream = fs.createWriteStream(`./data/books.csv`);

//refer to https://nodejs.org/api/stream.html#stream_event_drain
stream.write("title,description,author_id,published_year,cover,status\n");

function makeBooks(writer, callback) {
  console.time("timing seed");
  var i = 10000000;
  (function write() {
    var ok = true;
    while (i > 0 && ok) {
      i--;
      var title = faker.commerce.productName();
      var description = faker.lorem.paragraphs();
      var author_id = faker.random.number({ min: 1, max: 10000000 });
      var published_year = faker.random.number({ min: 1920, max: 2019 });
      var cover =
        coverPicture + faker.random.number({ min: 1, max: 7 }) + ".jpg";
      var data = `${title},"${description}",${author_id},${published_year},${cover},${datStatus}\n`;
      if (i === 0) {
        writer.write(data, callback);
      } else {
        ok = writer.write(data);
      }
    }
    if (i > 0) {
      writer.once("drain", write);
    }
  })();
}

makeBooks(stream, () => {
  stream.end();
  console.timeEnd("timing seed");
});
