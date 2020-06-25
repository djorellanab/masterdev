const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

module.exports = function router({ HomeRoutes }) {
    const router = express.Router();
    
    router.use(express.json())
    .use(cors())
    .use(helmet());

    router.use('/home', HomeRoutes);

    return router;
}