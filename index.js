const express = require('express');
const app = express();
const port = 8021;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
