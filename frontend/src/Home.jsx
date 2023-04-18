import Header from "./components/Header";
import { useEffect, useState } from "react";
import {
    CurrencyDollarIcon,
    CreditCardIcon,
    UsersIcon,
    BanknotesIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Home = () => {
    const actions = [
        {
            icon: CurrencyDollarIcon,
            name: "Budget",
            href: "budget",
            iconForeground: "text-teal-700",
            iconBackground: "bg-teal-50",
            description: "Change or view your current budget",
        },

        {
            icon: BanknotesIcon,
            name: "Spending",
            href: "spending",
            iconForeground: "text-sky-700",
            iconBackground: "bg-sky-50",
            description: "View recommendations to improve your budget",
        },
        {
            icon: CreditCardIcon,
            name: "Spending Analyzer",
            href: "analysis",
            iconForeground: "text-purple-700",
            iconBackground: "bg-purple-50",
            description: "View an analysis of your spending",
        },
    ];
    return (
        <div className="bg-gray-900 h-screen">
            <Header />
            <div className="overflow-auto bg-white max-w-4xl mx-auto rounded-md p-4 sm:p-6 lg:p-8">
            EZ Budget Manager
                <section aria-labelledby="quick-links-title">
                    <div className="divide-y divide-gray-200 mt-2 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                        <h2 className="sr-only" id="quick-links-title">
                            Quick links
                        </h2>
                        
                        {actions.map((action, actionIdx) => (
                            <div
                                key={action.name}
                                className={classNames(
                                    actionIdx === 0
                                        ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                                        : "",
                                    actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                                    actionIdx === actions.length - 2
                                        ? "sm:rounded-bl-lg"
                                        : "",
                                    actionIdx === actions.length - 1
                                        ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                                        : "",
                                    "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
                                )}
                            >
                                <div>
                                    <span
                                        className={classNames(
                                            action.iconBackground,
                                            action.iconForeground,
                                            "inline-flex rounded-lg p-3 ring-4 ring-white"
                                        )}
                                    >
                                        <action.icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-lg font-medium">
                                        <a
                                            href={action.href}
                                            className="focus:outline-none"
                                        >
                                            {/* Extend touch target to entire panel */}
                                            <span
                                                className="absolute inset-0"
                                                aria-hidden="true"
                                            />
                                            {action.name}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {action.description}
                                    </p>
                                </div>
                                <span
                                    className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                    </svg>
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
