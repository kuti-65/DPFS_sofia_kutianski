const express = require("express");
const { getUsers, getProfile } = require("../../controllers/api/users.api.controller");
const router = express.Router();


// Endpoint de usuarios
router.get('/', getUsers);

// Endpoint de usuarios
router.get('/profile/:id', getProfile);


module.exports = router;