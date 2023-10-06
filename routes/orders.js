const express = require('express')
const router = express().Router()

// /orders -->
router.get('/', async (req, res, next)=>{
    // get orders from database
})
router.get('/:orderId', async (req, res, next)=>{
    console.dir(req)
    // req.params object has the "orderId" parameter
    // get order from database
})

router.post('/', (req, res, next) => {
    // send data to database (new order)
})
router.post('/:orderId', (req, res, next) => {
    // send data to database (update existing order)
})
router.delete('/:orderId', (req, res, next) => {
    // delete a order (order.status === "deleted")
})


module.exports = router

