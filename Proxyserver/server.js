const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api/testimonials', async (req, res) => {
  try {
    const response = await fetch('https://elitefit4you.com/test-api/testimonials.json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the data.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
