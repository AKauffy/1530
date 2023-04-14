const express = require('express')
const {
  createBudget,
  getBudgets,
  getBudget,
  deleteBudget,
  updateBudget
} = require('../controllers/budgetController')

const router = express.Router()

// GET all workouts
router.get('/', getBudgets)

//GET a single workout
router.get('/:id', getBudget)

// POST a new workout
router.post('/', createBudget)

// DELETE a workout
router.delete('/:id', deleteBudget)

// UPDATE a workout
router.patch('/:id', updateBudget)


module.exports = router