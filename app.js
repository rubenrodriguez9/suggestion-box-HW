const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();

require('dotenv').config();

const suggestionRoutes = require('./routes/suggestionRoutes')

mongoose.connect('mongodb:localhost/suggestions',{

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true


})
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => `${err}`)

const port = process.env.PORT || 3000;

app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/api/v1/suggestions', suggestionRoutes);

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});