const model = require('../models/costumes_model');

// getAllCostumes
const getAllCostumes = async (req, res, next) => {
  try {
    const costumes = await model.getAllCostumes();
    console.log(costumes);
    return res.status(200).json(costumes);
  } catch (error) {
    console.log(error);
  }
};

// getCostumeById
const getCostumeById = async (req, res, next) => {
  try {
    const costume = await model.getCostumeById(req.params.id);
    console.log(costume);
    return res.status(200).json(costume);
  } catch (error) {
    console.log(error);
  }
};

// createCostume req.body
const createCostume = async (req, res, next) => {
  try {
    const costume = await model.createCostume(req.body);
    console.log(costume);
    return res.status(201).json(costume);
  } catch (error) {
    console.log(error);
  }
};

// updateCostume req.body
// deleteCostume

module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume
  // updateCostume
  // deleteCostume
};
