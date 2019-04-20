const faker = require("faker");
const fs = require("file-system");
const csvWriter = require("csv-write-stream");
const writer = csvWriter();
const coverPicture = "http://d37pd3xfja253q.cloudfront.net/books/sample-image-";
const profilePic = "http://d37pd3xfja253q.cloudfront.net/authors/sample-image-";
const status = "Want to Read";

var createBook = function() {
  writer.pipe(fs.createWriteStream("author.csv"));
  for (var i = 0; i < 10000000; i++) {
    writer.write(
      JSON.stringify({
        title: faker.commerce.productName(),
        description: faker.lorem.paragraphs(),
        author_id: faker.random.number({ min: 1, max: 25 }),
        published_year: faker.random.number({ min: 1920, max: 2019 }),
        cover: coverPicture + faker.random.number({ min: 1, max: 7 }) + ".jpg",
        status: status,
        author: {
          name: faker.name.findName(),
          details: faker.lorem.paragraphs(),
          profile_pic: `${profilePic +
            faker.random.number({ min: 1, max: 3 })}.jpg`,
          followers: faker.random.number({ min: 0, max: 20000 })
        }
      })
    );
  }
  writer.end();
};

createBook();
