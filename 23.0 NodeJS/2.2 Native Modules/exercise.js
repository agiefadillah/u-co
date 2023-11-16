const fs = require('fs');

fs.readFile('./message.txt', 'Hello from Agie!', (err) => {
  if (err) throw err;
  console.log('The File Has Been Saved!');
});
