const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');

const searchRoute = require('./Data.js');

// Environment Variables
const { PORT } = require('./utils/config.js');

app.use('/api', searchRoute);

if (process.env.NODE_ENV === "production") {
    // Serve static files from the frontend build
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    // Route all unknown endpoints to the frontend app
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
    });
   
    // Cater for Serverless 
    module.exports = app;
}

if (process.env.NODE_ENV === "development") {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    })

    // Convenience and mimicking prod
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
}