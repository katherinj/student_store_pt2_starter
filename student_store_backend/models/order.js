const db = require("../db")

class Order {
  static async listOrdersForUser() {
    //will return all orders that the authenticated user has created. 
  }

  static async createOrder({ user, order }) {
    //will take a user's order and store it in the database.
    // const requiredFields = ["caption", "imageUrl"]
    // requiredFields.forEach((field) => {
    //   if (!post.hasOwnProperty(field) || !post[field]) {
    //     throw new BadRequestError(`Required field - ${field} - missing from request body.`)
    //   }
    // })

    // if (post.caption.length > 140) {
    //   throw new BadRequestError(`Post caption must be 140 characters or less.`)
    // }

    // // insert a new post into the database
    // const results = await db.query(
    //   `
    //   INSERT INTO orders (caption, image_url, user_id)
    //   VALUES ($1, $2, (SELECT id FROM users WHERE email = $3))
    //   RETURNING id, 
    //             caption, 
    //             image_url AS "imageUrl",
    //             user_id AS "userId",
    //             $3 AS "username",
    //             created_at AS "createdAt",
    //             updated_at AS "updatedAt"
    // `,
    //   [post.caption, post.imageUrl, user.email]
    // )

    // return results.rows[0]

  }
}

module.exports = Order