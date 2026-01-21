// Task 3: Simple HTTP Server - SOLUTION
// This file demonstrates the solution for Task 3

const http = require('http');

const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Handle different routes
  if (req.url === '/') {
    res.end('Welcome to Node.js Workshop!');
  } else if (req.url === '/about') {
    res.end('This is a Node.js basics workshop');
  } else if (req.url === '/time') {
    const currentTime = new Date().toLocaleString();
    res.end(`Current time: ${currentTime}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('Try visiting:');
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  http://localhost:${PORT}/about`);
  console.log(`  http://localhost:${PORT}/time`);
  console.log('\nPress Ctrl+C to stop the server');
});
