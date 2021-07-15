const express = require('express');
require('dotenv').config();
const cors = require("cors");
const router = require('./routes/productos');
const path = require('path')
const app = express();

const port = process.env.PORT||5000

app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})