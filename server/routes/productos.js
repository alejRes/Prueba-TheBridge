const router =require('express').Router()
const productos = require('../controllers/productos')

router.get('/search', productos.getAllProducts)

module.exports=router