require('dotenv').config()
const client = require('./client.js')
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const app = express()
const ordersRoute = require('./routes/orders.js')
const orderItemsRoute = require('./routes/orderItems.js')
const PORT = process.env.PORT || 4000

client.connect() // connects to database

// middleware start
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// middleware end

// routes start
app.get('/', (req, res)=>{res.send('hello world')}) // index

// routers
app.use('/orders', ordersRoute)
app.use('/orderItems', orderItemsRoute)

// anything not matching
app.use('*', (req, res) => {
  res.redirect('/api');
})

// misc error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send({
    success: false,
    error: {
      name: err.name || 'UnknownError',
      message: err.message || "Internal server error",
    },
    data: null,
  });
});
// routes end

// start server
app.listen(PORT, ()=>{
console.log(`listening on port ${PORT}`)
})