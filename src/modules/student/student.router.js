var router = require('express').Router();
var service = require('./student.service');

router.post("/create", async (req, res) => {
    const result = await service.toCreateStudent(req, res);
    res.status(result.statusCode).send(result);
});

router.put("/:id", async (req, res) => {
    const result = await service.toUpdateStudent(req, res);
    res.status(result.statusCode).send(result);
});

router.get("/list/:id", async (req, res) => {
    const result = await service.toGetAllStudents(req, res);
    res.status(result.statusCode).send(result);
});

module.exports = { router };