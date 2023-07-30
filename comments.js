// Create web server using express.js
const express = require('express');
const app = express();

// Create a route for GET request
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Create a route for GET request
app.get('/api/comments', (req, res) => {
    res.send([1, 2, 3]);
});

// Create a route for GET request
app.get('/api/comments/:id', (req, res) => {
    res.send(req.params.id);
});

// Create a route for POST request
app.post('/api/comments', (req, res) => {
    res.send('POST request to the homepage');
});

// Create a route for PUT request
app.put('/api/comments/:id', (req, res) => {
    res.send('PUT request to the homepage');
});

// Create a route for DELETE request
app.delete('/api/comments/:id', (req, res) => {
    res.send('DELETE request to the homepage');
});

// Create a port for server to listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); using express