const sessionService = require('../services/sessionService');

exports.sessionUser = async (req, res) => {
  try {
    const result = await sessionService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
