const listAllService = require('../services/listAllServiceService');

exports.allService = async (req, res) => {
  try {
    const result = await listAllService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
