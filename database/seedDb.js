const faker = require("faker");
const fs = require("file-system");
const coverPicture = "http://d37pd3xfja253q.cloudfront.net/books/sample-image-";
const profilePic = "http://d37pd3xfja253q.cloudfront.net/authors/sample-image-";
const status = "Want to Read";

//there are only three author pictures and they have the url ending in 1,2 or 3
const createBook = () => {
  var bookData = {
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
  };
  return bookData;
};
console.log(createBook());
//write fswait or query postgresql and query mongodb
//data.author.name is the same as faker.random.number
//16 books to author
