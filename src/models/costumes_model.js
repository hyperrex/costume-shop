const query = require('../queries/costumes_queries');

const getAllCostumes = async () => {
  const costumes = await query.getAllCostumes();
  return costumes;
};

const getCostumeById = async (id) => {
  const costume = await query.getCostumeById(id);
  return costume;
}

const createCostume = async (costume) => {
  const costume = await query.createCostume(costume);
  return costume;
}

// updateCostume
// deleteCostume

module.exports = {
  getAllCostumes,
  getCostumeById,
  createCostume
};
