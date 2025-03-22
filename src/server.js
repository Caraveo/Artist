const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for your domain
app.use(cors({
  origin: ['https://joncaraveo.com', 'https://www.joncaraveo.com']
}));

// Enable compression
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, '../dist')));

// Handle all routes for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 