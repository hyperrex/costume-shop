const model = require('../models/tags_model');

// getAllTags
const getAllTags = async (req, res, next) => {
  try {
    const tags = await model.getAllTags();
    // console.log(tags);
    return res.status(200).json(tags);
  } catch (error) {
    console.log(error);
  }
};

// getTagById
const getTagById = async (req, res, next) => {
  try {
    const tagById = await model.getTagById(req.params.id);
    // console.log(tagById);
    return res.status(200).json(tagById);
  } catch (error) {
    console.log(error);
  }
};

// createTag >> req.body
const createTag = async (req, res, next) => {
  try {
    const tag = await model.createTag(req.body);
    // console.log(costume);
    return res.status(201).json(tag);
  } catch (error) {
    console.log(error);
  }
};

// updateTag >> req.body
const updateTag = async (req, res, next) => {
  try {
    const updatedTag = await model.updateTag(req.params.id, req.body);
    // console.log(updatedTag);
    return res.status(201).json(updatedTag);
  } catch (error) {
    console.log(error);
  }
};

// deleteTag
const deleteTag = async (req, res, next) => {
  try {
    const deletedTag = await model.deleteTag(req.params.id);
    // console.log(deletedTag);
    return res.status(201).json(deletedTag);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag 
};
