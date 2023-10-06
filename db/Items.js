const client = require('../client.js')

/**
  Item {
    id: integer
    trich: string,
    cultivarName: string,
    category: string,
    boughtFrom: string,
    source: string,
    dateEntered: integer,
    inventory: integer,
    details: string,
    link: string,
    price: integer
    inStock: string,
    status: string
  }
 */

  /*
  async function getActivityById(activityId){
    try {
      const {rows: [activity]} = await client.query(`
        SELECT * FROM activities
        WHERE id = $1
      `, [activityId]);
      return activity;
    } catch (error) {
      throw error;
    }
  }

  function dbFields(fields) {
    const insert = Object.keys(fields).map(
      (key, index) => `"${ key }"=$${ index + 1 }`
    ).join(', ');
    // then we can use: (${ insert }) in our string template
    
    // need something like $1, $2, $3
    const select = Object.keys(fields).map(
      (_, index) => `$${index + 1}`).join(', ');
    // then we can use (${ select }) in our string template

    const vals = Object.values(fields);
    return {insert, select, vals};
  }

async function updateActivity({id, ...fields}){
    try {
      const toUpdate = {}
      for(let column in fields) {
        if(fields[column] !== undefined) toUpdate[column] = fields[column];
      }
      const values = Object.values(toUpdate))
      let activity;
      if (dbFields(toUpdate).insert.length > 0) {
        const {rows} = await client.query(`
          UPDATE activities
          SET ${ dbFields(toUpdate).insert } // `"${key}"=$${idx+1}`
          WHERE id=${ id } // in parameters
          RETURNING *;
        `, values) // values = [5, "", "name", "inactive", true]
        activity = rows[0];
      }
      return activity;
    } catch (error) {
      throw error
    }
  }
  */

  async function createItem({payload}) {}
  async function updateItem({itemId, ...payload}) {}
  async function removeItem({itemId}) {}
  async function getItem({itemId}) {}
  async function getItems() {}