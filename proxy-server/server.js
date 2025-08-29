const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.all('/proxy', async (req, res) => {
  try {
    const axiosRes = await axios({
      method: req.body.method || 'get',
      url: req.body.url,
      headers: req.body.headers || {},
      data: req.body.data || null,
      maxBodyLength: Infinity
    });
    res.json(axiosRes.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
