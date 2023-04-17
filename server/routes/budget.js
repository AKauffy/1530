const express = require("express");
const {
    createBudget,
    getBudgets,
    getBudget,
    deleteBudget,
    updateBudget,
} = require("../controllers/budgetController");

const router = express.Router();

// GET all budget
router.get("/", getBudgets);

//GET a single budget
router.get("/:id", getBudget);

// POST a new budget
router.post("/", createBudget);

// DELETE a budget
router.delete("/:id", deleteBudget);

// UPDATE a budget
router.patch("/:id", updateBudget);

module.exports = router;
