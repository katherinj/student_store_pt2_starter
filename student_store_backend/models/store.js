const db = require("../db")

class Store {
  static async listProducts() {
    // list all posts in the database
    // from most recent to least recent
    // each post should include all of its ratings

    // const results = await db.query(`
    //   SELECT p.id,
    //          p.name,
    //          p.category,
    //          p.image,
    //          p.descrition,
    //          p.price
    //   FROM products AS p
    // `)

    // return results.rows
    return null
  }
}

module.exports = Store