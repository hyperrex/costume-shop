const query = require('../queries/costumes_queries');

const getAllCostumes = async () => {
  const costumes = await query.getAllCostumes();
  return costumes;
};

const getCostumeById = async id => {
  const costumeById = await query.getCostumeById(id);
  return costumeById;
};

const createCostume = async costume => {
  const newCostume = await query.createCostume(costume);
  return newCostume;
};

const updateCostume = async (id, body) => {
  const updatedCostume = await query.updateCostume(id, body);
  return updatedCostume;
};

const deleteCostume = async id => {
  const deletedCostume = await query.deleteCostume(id);
  return deletedCostume;
};

module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume,
  updateCostume,
  deleteCostume
};
