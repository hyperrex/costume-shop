const knex = require('../../db/db');

const getAllCostumes = async () => {
  return await knex('costumes').orderBy('created_at', 'desc');
};

const getCostumeById = (id) => {
  return knex('costumes').where('id', id);
};

const createCostume = (id) => {
  return knex('costumes').insert(req.body);
};
// updateCostume
// deleteCostume

module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume
};