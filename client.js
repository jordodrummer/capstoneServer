const { Client } = require('pg')

const connectionDetails = process.env.DB_URL ? { connectionString: process.env.DB_URL } : {
  name: process.env.DB_NAME || 'cactus_shop',
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'jordo_drummer',
  password: process.env.DB_PASS || '',
  port: process.env.DB_PORT || 5432
}

const client = new Client(connectionDetails)

module.export = client