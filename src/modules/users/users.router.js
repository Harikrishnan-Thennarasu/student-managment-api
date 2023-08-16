var router = require('express').Router();
var service = require('./users.service');

router.post("/signup", async (req, res) => {
    const result = await service.toSignUpUser(req, res);
    res.status(result.statusCode).send(result); 
});

router.post("/login", async (req, res) => {
    const result = await service.toLoginUser(req, res);
    res.status(result.statusCode).send(result);
});

module.exports = { router };