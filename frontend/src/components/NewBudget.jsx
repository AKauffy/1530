import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";

const NewBudget = () => {
    const submitNewBudget = (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const amount = document.getElementById("amount").value;
        const user_id = localStorage.getItem("user");
        console.log(title);
        console.log(amount);
        console.log(user_id);
        const request = { title: title, amount: amount, user_id: user_id };
        const response = fetch("/api/api/budget/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }).then((response) => {
            response = response.json().then((data) => {
                console.log(data);
                window.location.href = "/budget";
            });
        });
    };

    return (
        <div className="bg-gray-900 h-screen w-screen">
            <Header />
            <div
                className="overflow-auto bg-white max-w-4xl mx-auto rounded-md p-4 sm:p-6 lg:p-8"
                style={{ maxHeight: 800 }}
            >
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Budgets
                        </h1>
                    </div>
                </div>
                <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                    {" "}
                    <form
                        // action=""
                        method="POST"
                        className="px-6 py-8"
                    >
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="text"
                                        className="block text-sm font-semibold leading-6 text-black"
                                    >
                                        Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="block w-full rounded-md border-0 bg-black/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="phone-number"
                                        className="block text-sm font-semibold leading-6 text-black"
                                    >
                                        Amount
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="number"
                                            name="amount"
                                            id="amount"
                                            className="block w-full rounded-md border-0 bg-black/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-between">
                                <button
                                    onClick={submitNewBudget}
                                    type="submit"
                                    className="rounded-md bg-indigo-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Add a new Budget
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewBudget;
