const faker = require("faker");
const fs = require("file-system");
const csvWriter = require("csv-write-stream");
const writer = csvWriter();
const coverPicture = "http://d37pd3xfja253q.cloudfront.net/books/sample-image-";
const profilePic = "http://d37pd3xfja253q.cloudfront.net/authors/sample-image-";
const status = "Want to Read";

//reffer to https://www.npmjs.com/package/csv-write-stream

var createAuthors = function() {
  var authorData = {
    id: faker.random.number({ min: 0, max: 10000000 }),
    name: faker.name.findName(),
    details: faker.lorem.paragraphs(),
    profile_pic: `${profilePic + faker.random.number({ min: 1, max: 3 })}.jpg`,
    followers: faker.random.number({ min: 0, max: 20000 })
  };
  return authorData;
};

var makeAuthors = function() {
  var stream = fs.createWriteStream(`./data/authors.csv`);
  writer.pipe(stream);
  var generateAuthors = function() {
    console.log("timing seed");
    for (var i = 0; i < 10000000; i++) {
      var author = createAuthors();
      writer.write(author);
    }
    writer.end();
    console.timeEnd("timing seed");
  };
  generateAuthors();
};

makeAuthors();
