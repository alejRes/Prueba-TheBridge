const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'prueba_the_bridge',  
    connectionLimit: 5
})
     
const Product = {
    getAllProducts: async() =>{
        let conn, result
        try {
            conn = await pool.getConnection();
            let query = "SELECT * FROM productos";
            result = await conn.query(query)
            console.log(`consulta realizada`)
        } catch (error) {
            
        }
        return result
    }
}

module.exports = Product
