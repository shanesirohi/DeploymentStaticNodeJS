const express = require('express');
const path = require('path');

const app = express();

// Define the directory where your static HTML files are located
const publicDirectoryPath = path.join(__dirname, 'public');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Serve index.html for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 10000; // Use the specified port or default to 10000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
