const express = require("express");
const {
    createSpending,
    getSpendings,
    getSpending,
    deleteSpending,
    updateSpending,
} = require("../controllers/spendingController");

const router = express.Router();

// GET all Spending
router.get("/", getSpendings);

//GET a single Spending
router.get("/:id", getSpending);

// POST a new Spending
router.post("/", createSpending);

// DELETE a Spending
router.delete("/:id", deleteSpending);

// UPDATE a Spending
router.patch("/:id", updateSpending);

module.exports = router;
