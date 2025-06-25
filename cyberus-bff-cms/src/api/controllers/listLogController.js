const listLogService = require('../services/listLogService');

exports.listLog= async (req, res) => {
  try {
    const result = await listLogService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
