import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";

const Analysis = () => {
    const [budget, setBudget] = useState();
    const [spending, setSpending] = useState();

    const getBudget = () => {
        fetch("/api/api/budget").then((response) => {
            response = response.json().then((data) => {
                setBudget(data);
            });
        });
    };

    const getSpending = () => {
        fetch("/api/api/spending").then((response) => {
            response = response.json().then((data) => {
                setSpending(data);
            });
        });
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month} ${day} ${year}`;
    };

    function updateBudgetSpent(budgets, expenses) {
        // Loop through each expense
        expenses.forEach((expense) => {
            // Find the corresponding budget
            const budget = budgets.find(
                (budget) => budget._id === expense.budget
            );

            // If a matching budget is found, add the expense amount to the budget's spent amount
            if (budget) {
                budget.spent += expense.Amount;
            }
        });

        return budgets;
    }

    // useEffect(() => {
    //     getBudget();
    //     getSpending();
    //     editBudget();
    // }, []);

    useEffect(() => {
        Promise.all([
            fetch("/api/api/budget").then((response) => response.json()),
            fetch("/api/api/spending").then((response) => response.json()),
        ]).then(([budgetData, spendingData]) => {
            const updatedBudgets = updateBudgetSpent(budgetData, spendingData);
            setBudget(updatedBudgets);
            setSpending(spendingData);
        });
    }, []);

    return (
        <div className="bg-gray-900 h-screen w-screen">
            <Header />
            <div
                className="overflow-auto bg-white max-w-4xl mx-auto rounded-md p-4 sm:p-6 lg:p-8"
                style={{ maxHeight: 800 }}
            >
                <>
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold leading-6 text-gray-900">
                                Analysis
                            </h1>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow mt-5">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Budgets
                        </h1>
                        <table className="min-w-full divide-y divide-gray-300 ">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                    >
                                        Budgeted $/Month
                                    </th>
                                    <th
                                        scope="col"
                                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                    >
                                        Spent this Month
                                    </th>
                                    <th
                                        scope="col"
                                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                    >
                                        $ Remaining this Month
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {budget?.map((bud, planIdx) => (
                                    <tr key={bud.id}>
                                        <td className="py-4 pl-4 pr-3 text-sm sm:pl-6">
                                            {bud.title}
                                        </td>
                                        <td className="px-3 py-4 text-sm text-gray-500">
                                            {bud.Amount}
                                        </td>
                                        <td className="px-3 py-4 text-sm text-gray-500">
                                            {bud.spent}
                                        </td>
                                        <td className="px-3 py-4 text-sm text-gray-500">
                                            {bud.Amount - bud.spent}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow mt-5">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Expenses
                        </h1>
                        <table className="min-w-full divide-y divide-gray-300 ">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                    >
                                        $/Month
                                    </th>
                                    <th
                                        scope="col"
                                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                    >
                                        Budget
                                    </th>
                                    <th
                                        scope="col"
                                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                    >
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {spending?.map((bud, planIdx) => (
                                    <tr key={bud.id}>
                                        <td className="py-4 pl-4 pr-3 text-sm sm:pl-6">
                                            {bud.title}
                                        </td>
                                        <td className="px-3 py-4 text-sm text-gray-500">
                                            <input
                                                name="Amount"
                                                value={bud.Amount}
                                                onChange={(e) =>
                                                    onChangeInput(e, bud._id)
                                                }
                                            ></input>
                                        </td>
                                        <td className="py-4 pl-4 pr-3 text-sm ">
                                            {budget?.map((budg) => {
                                                if (budg._id === bud.budget) {
                                                    return <p>{budg.title}</p>;
                                                }
                                            })}
                                        </td>
                                        <td>{formatDate(bud.date)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Analysis;
