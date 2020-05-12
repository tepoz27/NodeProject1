const express = require('express');
const router = express.Router();
const Users = require('../models/User');

router.get('/', (req, res) => {
    res.send('We are on posts');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;