/**
 * order{}
 * 
 * {
 *   id: number
 *   userId: number
 *   status: string
 *   createdAt: date
 *   updatedAt: date
 * }
 */

const client = require('../client.js')

// create database queries here
async function getOrders({userId, orderId}) {
  try {
    // write the query
    const {rows}= await client.query(`
      select * from orders
      where id = $1
      and userId = $2;
    `, [orderId, userId])
    console.log(rows)
    if (!rows.length) throw new Error("no orders found")
    return rows
  } catch (error) {
    console.error(error)
  }
}

async function createOrder() {}
async function updateOrder() {}

modules.export = {
  // add functions created here
  getOrders
}