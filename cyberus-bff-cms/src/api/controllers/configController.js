const configService = require('../services/configService');

exports.configUser = async (req, res) => { 
    try {
       const result = await configService.forwardToBackend(req.body);
       res.status(200).json(result);
     } catch (error) {
       res.status(500).json({ error: 'Something went wrong' });
     }
 };
