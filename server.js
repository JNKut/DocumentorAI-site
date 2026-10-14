const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Only the public/ folder is served, so server.js, package.json and any other
// files in the repo root are never exposed.
const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Site running on port ${port}`);
});
