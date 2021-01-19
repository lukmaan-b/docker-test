const express = require('express');
const app = express();

const PORT = 8080;
const HOST = '79.124.7.85';
app.get('/', (req, res) => {
  res.header('Content-Type', 'text/html');
  res.write('hello world');
  res.end();
});

app.listen(PORT, HOST);
