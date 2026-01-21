const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json'
};

// Create the server
const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    try {
        // Handle /api/time route (Bonus Task 6)
        if (req.url === '/api/time' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                currentTime: new Date().toISOString(),
                timestamp: Date.now()
            }));
            return;
        }

        // Determine the file path based on the URL
        let filePath;
        
        if (req.url === '/') {
            // Root path -> index.html
            filePath = path.join(__dirname, 'public', 'index.html');
        } else if (req.url === '/about') {
            // About page
            filePath = path.join(__dirname, 'public', 'about.html');
        } else if (req.url === '/contact') {
            // Contact page
            filePath = path.join(__dirname, 'public', 'contact.html');
        } else if (req.url.startsWith('/styles/')) {
            // CSS files
            filePath = path.join(__dirname, 'public', req.url);
        } else {
            // Unknown path -> 404
            filePath = path.join(__dirname, 'public', '404.html');
            res.statusCode = 404;
        }

        // Get file extension for MIME type
        const extname = path.extname(filePath);
        const contentType = mimeTypes[extname] || 'text/html';

        // Read and serve the file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                // Error handling
                if (err.code === 'ENOENT') {
                    // File not found
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<h1>404 - Page Not Found</h1>', 'utf-8');
                } else {
                    // Server error
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('<h1>500 - Internal Server Error</h1>', 'utf-8');
                }
            } else {
                // Success
                if (!res.statusCode || res.statusCode === 200) {
                    res.writeHead(200, { 'Content-Type': contentType });
                } else {
                    res.writeHead(res.statusCode, { 'Content-Type': contentType });
                }
                res.end(content, 'utf-8');
            }
        });
    } catch (error) {
        // Catch any unexpected errors
        console.error('Server error:', error);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Internal Server Error</h1>', 'utf-8');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
