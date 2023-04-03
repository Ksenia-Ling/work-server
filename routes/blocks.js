const express = require('express');

const blockRoutes = express.Router();

const {
    getBlockAttributes,
    saveBlockAttributes
} = require('../controllers/blocks');

blockRoutes.get('/blocks/:blockId', getBlockAttributes);
blockRoutes.post('/blocks', saveBlockAttributes);

module.exports = blockRoutes;