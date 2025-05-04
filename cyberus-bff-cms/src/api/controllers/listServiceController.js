const listServiceService = require('../services/listServiceService');

exports.listService = async (req, res) => {
  try {
    const result = await listServiceService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
