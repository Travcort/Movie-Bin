const express = require('express');
const router = express.Router();
const { baseUrl, key } = require('./utils/config.js');

router.get('/:title' , async (req,res) => {
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

module.exports = router;