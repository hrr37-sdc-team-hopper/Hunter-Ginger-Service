const faker = require("faker");
const fs = require("file-system");
const csvWriter = require("csv-write-stream");
const writer = csvWriter();
const coverPicture = "http://d37pd3xfja253q.cloudfront.net/books/sample-image-";
const profilePic = "http://d37pd3xfja253q.cloudfront.net/authors/sample-image-";
const status = "Want to Read";

//reffer to https://www.npmjs.com/package/csv-write-stream

// var createBook = function() {
//   var bookData = {
//     title: faker.commerce.productName(),
//     description: faker.lorem.paragraphs(),
//     author_id: faker.random.number({ min: 1, max: 25 }),
//     published_year: faker.random.number({ min: 1920, max: 2019 }),
//     cover: coverPicture + faker.random.number({ min: 1, max: 7 }) + ".jpg",
//     status: status,
//     author: {
//       name: faker.name.findName(),
//       details: faker.lorem.paragraphs(),
//       profile_pic: `${profilePic +
//         faker.random.number({ min: 1, max: 3 })}.jpg`,
//       followers: faker.random.number({ min: 0, max: 20000 })
//     }
//   };
//   return bookData
// };

for (var j = 0; j < 10; j++) {
  var createBook = function() {
    console.time("timing seed");
    writer.pipe(fs.createWriteStream(`./data/${j}author.csv`));
    for (var i = 0; i < 1000000; i++) {
      writer.write({
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
      });
    }
    console.timeEnd("timing seed");
  };
  createBook();
}
writer.end();

//end of the stream you close the connection.
//if you are writing the stream, you are writing in chunks. that ends the connection and that
//csv separates with commas.
//one million is no problem but you need it to run 10 times.
