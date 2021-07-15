const Product = require('../model/db')

const routes ={

    getAllProducts: async (req,res)=>{
        try {
            let resp = await Product.getAllProducts()
            res.status(200).json(resp)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    getDetail: async (req, res)=>{
        let id =req.params.id
        try {
            let resp= await Product.getDetail(id)
            res.status(200).json(resp)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    getSearchProduct: async(req,res)=>{
        let search = req.params.s
        try {
            let resp =await Product.getProduct(search)
            res.status(200).json(resp)
        } catch (error) {
            
        }
    },
    getSearchEnterprise: async(req,res)=>{
        let search = req.params.s
        try {
            let resp =await Product.getEnterprise(search);
            res.status(200).json(resp);
        } catch (error) {
            
        }
    },
    getOrderPoduct: async (req, res)=>{
        let order = req.query.orden;
        
        try {
            let resp = await Product.getOrderPoductby(order);
            res.status(200).json(resp)
        } catch (error) {
            
        }

        
    },
}

module.exports=routes