const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();

// Environment Variables
const baseUrl = process.env.URL
const key = process.env.OMDB

const search = app.get('/:title' , async (req,res) => {
    try {
        const title = req.params.title
        const response = await fetch(`${baseUrl}?t=${title}&apikey=${key}`)
        const data = await response.json()
        res.status(200).json({data: data});
    }
    catch {
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
})


module.exports = {search}