// Create web server
// 1. Create a web server
// 2. Read the file comments.json
// 3. Respond to requests with the contents of the file

// 1. Create a web server
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  // 2. Read the file comments.json
  fs.readFile('./comments.json', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    // 3. Respond to requests with the contents of the file
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
});
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Run the server: node comments.js
// Access the server: http://localhost:3000
