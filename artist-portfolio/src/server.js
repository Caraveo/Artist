const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Serve static files from the public directory
app.use('/public', express.static(path.join(__dirname, '../public'), {
  fallthrough: true,
  index: false
}));

// Serve static files from the dist directory (for production build)
app.use(express.static(path.join(__dirname, '../dist'), {
  fallthrough: true,
  index: false
}));

// Handle API routes here
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../dist/index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath, err => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Error loading application');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Public directory: ${path.join(__dirname, '../public')}`);
  console.log(`Dist directory: ${path.join(__dirname, '../dist')}`);
}); 