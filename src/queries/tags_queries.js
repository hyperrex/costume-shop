const knex = require('../../db/db');

const getAllTags = async () => {
  return await knex('tags').orderBy('created_at', 'desc');
};

const getTagById = async id => {
  return await knex('tags').where('id', id);
};

const createTag = async body => {
  return await knex('tags')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const updateTag = async (id, body) => {
  return await knex('tags')
    .where('id', id)
    .update({
      name: body.name,
      color: body.color
    })
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const deleteTag = async (id) => {
  return await knex('tags')
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
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag 
};
