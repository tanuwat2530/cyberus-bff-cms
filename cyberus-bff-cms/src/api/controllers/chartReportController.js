const chartReportService = require('../services/chartReportService');

exports.chartReport = async (req, res) => {
  try {
    const result = await chartReportService.forwardToBackend(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
