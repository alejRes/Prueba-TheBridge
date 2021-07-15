const router =require('express').Router()
const productos = require('../controllers/productos')

router.get('/list', productos.getAllProducts)
router.get('/detail/:id', productos.getDetail)
router.get('/producto/:s', productos.getSearchProduct)
router.get('/empresa/:s', productos.getSearchEnterprise)
router.get('/ordenar', productos.getOrderPoduct)

module.exports=router