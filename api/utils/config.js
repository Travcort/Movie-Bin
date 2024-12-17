const dotenv = require('dotenv');
dotenv.config();

// Environment Variables
const baseUrl = process.env.URL;
const key = process.env.OMDB;
const PORT = process.env.SERVER_PORT;

module.exports = {baseUrl, key, PORT}