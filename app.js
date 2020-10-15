const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();

require('dotenv').config


const port = process.env.PORT || 3000

app.use(morgan('dev'))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/', (req,res) => {
    res.status(200).send('server is running')
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})