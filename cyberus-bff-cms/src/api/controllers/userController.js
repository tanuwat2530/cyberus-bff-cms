const userService = require('../services/userService');

exports.addUser = async (req, res) => {
  try {
    const result = await userService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
