const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

const { search } = require('./Data');

// Environment Variables
const PORT = process.env.SERVER_PORT;

app.use('/api', search);

if (process.env.NODE_ENV === "production") {
    // Serve static files from the frontend build
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    // Route all unknown endpoints to the frontend app
    app.get(/^\/(?!api).*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
    });
}

if (process.env.NODE_ENV === "development") {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    })
}