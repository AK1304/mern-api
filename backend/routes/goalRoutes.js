const express = require('express');
const router = express.Router();
const {GetGoals, SetGoals, UpdateGoal, DeleteGoal} = require('../controllers/goalControllers')


router.get("/", GetGoals)

router.post("/", SetGoals)

router.put("/:id", UpdateGoal)

router.delete("/:id", DeleteGoal)

module.exports = router