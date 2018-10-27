const query = require('../queries/tags_queries');

// getAllTags
const getAllTags = async () => {
  const tags = await query.getAllTags();
  return tags;
};

// getTagById
const getTagById = async id => {
  const tagById = await query.getTagById(id);
  return tagById;
};

// createTag
const createTag = async costume => {
  const newTag = await query.createTag(costume);
  return newTag;
};

// updateTag
const updateTag = async (id, body) => {
  const updatedTag = await query.updateTag(id, body);
  return updatedTag;
};

// deleteTag
const deleteTag = async id => {
  const deletedTag = await query.deleteTag(id);
  return deletedTag;
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag 
};
