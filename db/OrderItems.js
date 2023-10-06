/**
 * OrderItem {}
 * 
 * {
 *  id: number
 *  orderId: number
 *  qty: number
 *  price: number.toFixed(2)
 *  // from product on fakestore below here
 *  title: string
 *  description: string
 *  image: string (url)
 * }
 */

// create methods using pg to 

const client = require('../client.js')

async function createOrderItem({orderId, itemId, payload}){}
async function getOrderItems({orderId}){}
async function updateOrderItem({payload}){}
async function deleteOrderItem({dorderId}){}