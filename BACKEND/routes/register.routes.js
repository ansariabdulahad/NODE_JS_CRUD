const express = require('express');
const router = express.Router();

const registerController = require('../controller/register.controller');

router.post('/', (req, res) => {
    registerController.createRecord(req, res);
});

module.exports = router;