const express = require('express');
require('dotenv').config();
const cors = require("cors");
const router = require('./routes/productos');

const app = express();

const port = process.env.PORT||5000

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})