const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));  

app.use(routes);

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});

