const listUserService = require('../services/listUserService');

exports.listUser = async (req, res) => {
  try {
    const result = await listUserService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
