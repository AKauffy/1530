const Budget = require('../models/budgetModel')
const mongoose = require('mongoose')

const getBudgets = async (req, res) => {
    const budgets = await Budget.find()

    res.status(200).json(budgets)
}

const getBudget = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such budget'})
    }

    const budget = Budget.findById(id)

    if (!budget) {
        return res.status(404).json({error: 'No such budget'})
    }

    res.status(200).json(budget)
}


const createBudget = async (req, res) => {
  const {title, amount, user_id} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!amount) {
    emptyFields.push('amount')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  try {
    const budget = await Budget.create({title, Amount: amount, user_id})
    res.status(200).json(budget)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a Budget
const deleteBudget = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such budget'})
  }

  const budget = await Budget.findOneAndDelete({_id: id})

  if (!budget) {
    return res.status(400).json({error: 'No such budget'})
  }

  res.status(200).json(budget)
}


const updateBudget = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such budget'})
  }

  const budget = await Budget.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!budget) {
    return res.status(400).json({error: 'No such budget'})
  }

  res.status(200).json(budget)
}

module.exports = {
    getBudgets,
    getBudget,
    createBudget,
    deleteBudget,
    updateBudget
}
