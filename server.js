const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route serves the betting cheat sheet
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        message: 'TNF Betting Cheat Sheet is running',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).send(`
        <h1>404 - Page Not Found</h1>
        <p>Go back to the <a href="/">TNF Betting Cheat Sheet</a></p>
    `);
});

app.listen(PORT, () => {
    console.log(`🏈 TNF Betting Cheat Sheet server running on port ${PORT}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
});