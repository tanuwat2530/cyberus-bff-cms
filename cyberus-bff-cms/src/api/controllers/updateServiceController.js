const updateServiceService = require('../services/updateServiceService');

exports.updateService = async (req, res) => {
  try {
        const result = await updateServiceService.forwardToBackend(req.body);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json(error.status)
      }
 };
