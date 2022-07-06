const db = require("../db")

class Order {
  static async listOrdersForUser(user) {
    //will return all orders that the authenticated user has created. 

    const results = await db.query(`
    SELECT o.id AS "orderId",
           o.customer_id AS "customerId",
           od.quantity AS quantity,
           p.name AS name,
           p.price AS price
    FROM orders AS o
      JOIN order_details AS od ON od.order_id = o.id
      JOIN products AS p ON p.id = od.product_id
      WHERE o.customer_id = (SELECT id FROM users WHERE email = $1)
  `,[user.email])

  return results.rows
  }

  static async createOrder({ user, order }) {
    //will take a user's order and store it in the database.
    // const requiredFields = ["id", "quantity"]
    // requiredFields.forEach((field) => {
    //   if (!order.hasOwnProperty(field) || !order[field]) {
    //     throw new BadRequestError(`Required field - ${field} - missing from request body.`)
    //   }
    // })

    // insert a new order into the database
    const orderId = await db.query(
      `
      INSERT INTO orders (customer_id)
      VALUES ((SELECT id FROM users WHERE email = $1))
      RETURNING id;
    `,
      [user.email]
    )
  
    order.map(async (product) => {
        //order_id product_id quantity
        const result = await db.query(
            `
            INSERT INTO order_details (order_id, product_id, quantity)
            VALUES ($1, $2, $3)
            RETURNING order_id;
        `,
            [orderId.rows[0].id, product.id, product.quantity]
        )
    })
    return order
  }
}

module.exports = Order