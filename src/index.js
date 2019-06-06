const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/index')(app);


/*app.get('/', function () {
  console.log(path.dirname(require.main.filename || process.mainModule.filename));
});*/

app.listen(3000);
