const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/api/routes/apiRouter');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`BFF running on http://localhost:${PORT}`);
});
