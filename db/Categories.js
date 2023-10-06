const client = require("..client/")

async function createCategory({price, categoryName}) {
    try {
       await client.query(`
            INSERT INTO categories (price, categoryName) 
            VALUES($1, $2);

       `, [price, categoryName]) 
    } catch (error) {
        
    }


}

modules.exports = {createCategory}