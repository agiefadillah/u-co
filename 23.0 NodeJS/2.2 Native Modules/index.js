const fs = require('fs');

// fs.writeFile('message.txt', 'Hello from NodeJS!', (err) => {
//   if (err) throw err;
//   console.log('The File Has Been Saved!');
// });

fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
