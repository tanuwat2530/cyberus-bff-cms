const pieReportService = require('../services/pieReportService');

exports.pieReport = async (req, res) => {
  try {
    const result = await pieReportService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
