const asyncHandler = require('express-async-handler');

const GetGoals = asyncHandler(async(req, res) => {


    res.status(200).json({
        message: "GET GOALS"
    })
})

const SetGoals = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }

    res.status(200).json({
        message: "SET GOALS"
    })
})

const UpdateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `UPDATE GOAL ${req.params.id}`
    })
})

const DeleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: `DELETE GOAL ${req.params.id}`
    })
})

module.exports = {GetGoals, SetGoals, UpdateGoal, DeleteGoal}