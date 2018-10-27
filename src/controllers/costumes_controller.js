const model = require('../models/costumes_model');

// getAllCostumes
const getAllCostumes = async (req, res, next) => {
  try {
    const costumes = await model.getAllCostumes();
    // console.log(costumes);
    return res.status(200).json(costumes);
  } catch (error) {
    console.log(error);
  }
};

// getCostumeById
const getCostumeById = async (req, res, next) => {
  try {
    const costumeById = await model.getCostumeById(req.params.id);
    // console.log(costumeById);
    return res.status(200).json(costumeById);
  } catch (error) {
    console.log(error);
  }
};

// createCostume >> req.body
const createCostume = async (req, res, next) => {
  try {
    const costume = await model.createCostume(req.body);
    // console.log(costume);
    return res.status(201).json(costume);
  } catch (error) {
    console.log(error);
  }
};

// updateCostume >> req.body
const updateCostume = async (req, res, next) => {
  try {
    const costume = await model.updateCostume(req.params.id, req.body);
    // console.log(costume);
    return res.status(201).json(costume);
  } catch (error) {
    console.log(error);
  }
};

// deleteCostume
const deleteCostume = async (req, res, next) => {
  try {
    const costume = await model.deleteCostume(req.params.id);
    // console.log(costume);
    return res.status(201).json(costume);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume,
  updateCostume,
  deleteCostume
};
