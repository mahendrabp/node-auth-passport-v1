import express = require('express');

const app: express.Application = express();

app.get('/', function (_, res) {
  res.send('😶');
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});
