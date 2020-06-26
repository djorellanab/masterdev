const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

module.exports = function router({ HomeRoutes, CredentialRoutes, MessageRoutes,
    TagRoutes }) {
    const router = express.Router();
    
    router.use(express.json())
    .use(cors())
    .use(helmet());

    router.use('/home', HomeRoutes);
    router.use('/messages', MessageRoutes);
    router.use('/credential', CredentialRoutes);
    router.use('/tag', TagRoutes);

    return router;
}