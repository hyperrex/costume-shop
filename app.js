const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

const costumesRoutes = require('./src/routes/costumes_routes.js');
app.use('/costumes', costumesRoutes);

// app.use('/tags', tagsRoutes);
// const tagsRoutes = require('./src/routes/tags_routes.js');
// app.use('/tags', tagsRoutes);

/**** Error Handling ****/
app.all('*', (req, res, next) => res.sendStatus(404));

app.use((err, req, res, next) => {
  res.status(err.status).json(err);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`The furry convention is out of control on port ${port}!`);
  });
}

module.exports = app;
