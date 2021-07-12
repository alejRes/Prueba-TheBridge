const router =require('express').Router()
const productos = require('../controllers/productos')

router.get('/search', productos.getAllProducts)
router.get('/detail', productos.getDetail)
module.exports=router