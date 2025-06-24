const deleteServiceService = require('../services/deleteServiceService');

exports.deleteService = async (req, res) => {
  try {
        const result = await deleteServiceService.forwardToBackend(req.body);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json(error)
      }
 };
