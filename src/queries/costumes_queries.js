const knex = require('../../db/db');

const getAllCostumes = async () => {
  return await knex('costumes').orderBy('created_at', 'desc');
};

const getCostumeById = async id => {
  return await knex('costumes').where('id', id);
};

const createCostume = async body => {
  return await knex('costumes')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const updateCostume = async (id, body) => {
  return await knex('costumes')
    .where('id', id)
    .update({
      name: body.name,
      price: body.price,
      description: body.description
    })
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const deleteCostume = async (id) => {
  return await knex('costumes')
    .where('id', id)
    .del()
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
}

module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume,
  updateCostume,
  deleteCostume
};
