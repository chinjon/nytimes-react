const express = require('express'),
bodyParser = require('body-parser');

const routes = require('./routes/routes');


const app = express();
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3001));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/', routes)

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); 
});

