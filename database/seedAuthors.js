const faker = require("faker");
const fs = require("file-system");
const profilePic = "http://d37pd3xfja253q.cloudfront.net/authors/sample-image-";
const stream = fs.createWriteStream(`./data/authors.csv`);

//refer to https://nodejs.org/api/stream.html#stream_event_drain

stream.write("name,details,profile_pic,followers\n");

function makeAuthors(writer, callback) {
  console.time("timing seed");
  var i = 10000000;
  (function write() {
    var ok = true;
    while (i > 0 && ok) {
      i -= 1;
      var name = faker.name.findName();
      var details = faker.lorem.paragraphs();
      var profile_pic = `${profilePic +
        faker.random.number({ min: 1, max: 3 })}.jpg`;
      var followers = faker.random.number({ min: 0, max: 20000 });
      var data = `${name},"${details}",${profile_pic},${followers}\n`;
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

makeAuthors(stream, () => {
  stream.end();
  console.timeEnd("timing seed");
});