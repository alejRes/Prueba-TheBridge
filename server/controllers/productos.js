const Product = require('../model/db')

const routes ={

    getAllProducts: async (req,res)=>{
        try {
            let result = await Product.getAllProducts()
            console.log(`result`, result)
            res.status(200).json(result)
        } catch (error) {
            res.status(404).json(error)
        }
        
        
    }
}

module.exports=routes