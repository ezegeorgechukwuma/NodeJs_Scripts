// Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Helper function to determine greeting based on current hour
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    else if (hour < 18) return 'Good afternoon';
    else return 'Good evening';
}

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    
    const greeting = getGreeting();
    const dateToday = today.getDate();
    
    res.end(`${greeting}, World! The date today is ${dateToday}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
