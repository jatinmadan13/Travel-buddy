// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory data store (use a database in production)
const users = [];

// Static file serving
app.use(express.static('public'));

// Register User
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send('All fields are required.');
    }
    users.push({ username, email, password });
    res.status(201).send('User registered successfully.');
});

// Search Travel Partner
app.post('/api/search', (req, res) => {
    const { travelType, budget, destination } = req.body;
    // Simulated search result (add real search logic)
    const results = users.filter(user => user.username !== ''); // Simplified for demonstration
    res.send(results);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
