const knex = require('../../db/db');

const getAllCostumes = async () => {
  return await knex('costumes').orderBy('created_at', 'desc');
};

const getCostumeById = id => {
  return knex('costumes').where('id', id);
};

const createCostume = (body) => {
  return knex('costumes')
    .insert(body).returning('*')
    .catch((err) => {
      console.error(err)
      knex.destroy()
      process.exit(1)
    })
};


// updateCostume
// deleteCostume

module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume
  // updateCostume
  // deleteCostume
};
