const {createCategory} = require("./Categories.js")

const plantArray = require("./PlantList.json")
const client = require('../client.js')

async function dropTables() {
  console.log('Dropping all tables... preparing for rebuild')
  try {
    await client.query(`
    drop table if exists Customers;
    drop table if exists Orders;
    drop table if exists OrderDetails;
    drop table if exists Categories;
    drop table if exists Plants;
    `)
    console.log("finished dropping tables...")
  } catch (error) {
    throw error
  }
}

async function createTables() {
  console.log('Starting to build tables...')
  await client.query(`
    create table categories(
      id SERIAL PRIMARY KEY,
      price INTEGER,
      "categoryName" VARCHAR(50),
    );
  `)// categories


  
await client.query(`
    create table plants(
      id SERIAL PRIMARY KEY,
      "cultivarName" VARCHAR(50),
      "categoryId" INTEGER,
      image VARCHAR(250),
      // price_stand INTEGER DEFAULT NULL,
      // price_cut INTEGER DEFAULT NULL,
      // price_seeds INTEGER DEFAULT NULL,
      // price_rooted INTEGER DEFAULT NULL,
      // price_seedling INTEGER DEFAULT NULL,
      inventory INTEGER,
      FOREIGN KEY ("categoryId") REFERENCES categories(id)
    );
  `)// plants

  await client.query(`
    create table customers(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      address VARCHAR(50),
      city VARCHAR(50),
      state VARCHAR(50),
      zip VARCHAR(50),
      email VARCHAR(50),
    );
  `)// customers

  await client.query(`
  create table orders(
    id SERIAL PRIMARY KEY,
    "createdOn" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "customerId" integer,
    status VARCHAR(50),
    FOREIGN KEY ("customerId") REFERENCES customers(id)
    );
  `)// orders


  await client.query(`
    create table order_details(
      id SERIAL PRIMARY KEY,
      "priceEach" integer,
      quantity integer,
      FOREIGN KEY ("orderId") REFERENCES orders(id),
      FOREIGN KEY ("plantId") REFERENCES plants(id)
      );
  `)// customers

  console.log("Finished building tables...")
}

async function createCategories() {
  console.log("starting to create categories")
try {
  const categoriesToCreate = [{categoryName: 'seeds', categoryName: 'cut', categoryName: 'stand', }]

  
  const categories = await Promise.all(categoriesToCreate.map(createCategories))
  console.log("finishing create categories")
} catch (error) {
  
}


}

async function createInitialOrders() {
  // create an order for each user

  // order is basically empty
}
async function createInitialItems() {
  // use the plantArray
  // loop over the array
  // for each item, use a "createItem" function

  /** example of seeding process
    const usersToCreate = [
      { username: 'albert', password: 'bertie99' },
      { username: 'sandra', password: 'sandra123' },
      { username: 'glamgal', password: 'glamgal123' },
      ]
    const users = await Promise.all(usersToCreate.map(createUser));
   */

    // error handling
    // if no length do something
}
async function createInitialOrderItems() {
  // add items to an order
  // optional-ish
}

async function rebuildDb() {
  try {
    client.connect() // connect to your database

await dropTables()
await createTables()
await createCategories()

    // use dropTables

    // create Orders
    // create Items
    // create OrderItems

    // close connection
  } catch (error) {
    throw error
  }
}

rebuildDb()
  .catch((error) => console.error(error)) // only runs on error
  .finally(() => client.end()) // always runs, on error or success