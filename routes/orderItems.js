const express = require('express')
const router = express().Router()

// /orderitems -->
router.get('/', async (req, res, next)=>{
    // get orders from database
})
router.get('/:orderItemsId', async (req, res, next)=>{
    console.dir(req)
    // req.params object has the "orderItemsId" parameter
    // get order from database
})



module.exports = router