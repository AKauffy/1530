const Spending = require("../models/spendingModel");
const mongoose = require("mongoose");

const getSpendings = async (req, res) => {
    const spendings = await Spending.find();

    res.status(200).json(spendings);
};

const getSpending = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such spending" });
    }

    const spending = await Spending.findById(id);

    if (!spending) {
        return res.status(404).json({ error: "No such spending" });
    }

    res.status(200).json(spending);
};

const createSpending = async (req, res) => {
    const { title, amount, budget, date, user_id } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push("title");
    }
    if (!amount) {
        emptyFields.push("amount");
    }
    if (!budget) {
        emptyFields.push("budget");
    }
    if (emptyFields.length > 0) {
        return res
            .status(400)
            .json({ error: "Please fill in all the fields", emptyFields });
    }

    try {
        const spending = await Spending.create({ title, Amount: amount, budget, date, user_id });
        res.status(200).json(spending);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a spending
const deleteSpending = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such spending" });
    }

    const spending = await Spending.findOneAndDelete({ _id: id });

    if (!spending) {
        return res.status(400).json({ error: "No such spending" });
    }

    res.status(200).json(spending);
};

const updateSpending = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such spending" });
    }

    const spending = await Spending.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!spending) {
        return res.status(400).json({ error: "No such spending" });
    }

    res.status(200).json(spending);
};

module.exports = {
    getSpendings,
    getSpending,
    createSpending,
    deleteSpending,
    updateSpending,
};
