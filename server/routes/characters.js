const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.post('/', 
    characterController.getCharacters
);

module.exports = router;