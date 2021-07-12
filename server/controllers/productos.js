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
        let id =req.query.id
        try {
            let resp= await Product.getDetail(id)
            console.log(`resp`, resp)
            res.status(200).json(resp)
        } catch (error) {
            res.status(404).json(error)
        }

    }
}

module.exports=routes