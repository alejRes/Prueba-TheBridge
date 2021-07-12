const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME,  
    connectionLimit: 5
})
     
const Product = {
    getAllProducts: async() =>{
        let conn, result
        try {
            conn = await pool.getConnection();
            let query = "SELECT * FROM productos";
            result = await conn.query(query);
            
        }finally{
            if(conn)
                conn.end()
        }
        return result
    },
    getDetail: async(id)=>{

        let conn, result
      
        try {
            conn = await pool.getConnection();
            let query = "SELECT empresa, `direccion`, `cif`, nombre, `precio`, `valoracion` from empresas INNER JOIN productos on productos.empresaID=empresas.empresaID where productos.productoID=?";
            result = await conn.query(query,[id]);
        } catch (error) {
           
        }finally{
            if(conn)
                conn.end()
        }
    
        return result
    }
}

module.exports = Product
