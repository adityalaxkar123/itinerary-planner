import React, { useState, useEffect } from "react";

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [budget, setBudget] = useState(
    JSON.parse(localStorage.getItem("budget")) || 0
  );
  const [budgetExceeded, setBudgetExceeded] = useState(false);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [transactions, budget]);

  const addTransaction = (e) => {
    e.preventDefault();
    if (text.trim() === "" || amount.trim() === "") {
      alert("Please add a text and amount");
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };

      // Check if adding this transaction will exceed the budget
      const newTotal = transactions
        .concat(newTransaction)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

      if (newTotal > budget) {
        setBudgetExceeded(true);
        alert("You have exceeded your budget!");
      } else {
        setBudgetExceeded(false);
        setTransactions([...transactions, newTransaction]);
      }

      setText("");
      setAmount("");
    }
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const calculateValues = () => {
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    const expense = (
      amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
    return { total, income, expense };
  };

  const { total, income, expense } = calculateValues();
  const remainingBudget = (budget - total).toFixed(2);

  return (
    <div className="container mx-auto my-10 p-4 bg-white shadow-lg rounded-lg max-w-3xl">
      <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-600">Expense Tracker</h2>

      {/* Budget Section */}
      <div className="text-center">
        <h4 className="text-lg">Set Your Budget</h4>
        <input
          type="number"
          value={budget}
          onChange={handleBudgetChange}
          className="w-full p-3 mt-2 mb-4 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your budget"
        />
        <h4 className="text-lg mt-4">Remaining Budget</h4>
        <h1
          className={`text-3xl font-bold ${
            remainingBudget < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {`$${remainingBudget}`}
        </h1>
      </div>

      {/* Expense Tracker Summary */}
      <div
        className={`text-center mt-6 p-4 rounded-lg shadow-md ${
          budgetExceeded ? "bg-red-100" : "bg-white"
        }`}
      >
        <h4 className="text-lg">Trip Expenses</h4>
        <h1 className="text-3xl font-bold">{`$${total}`}</h1>
        <div className="flex justify-between bg-gray-100 p-4 rounded mt-4">
          <div className="text-center">
            <h4 className="text-md">Income</h4>
            <p className="text-green-500 font-semibold">{`+$${income}`}</p>
          </div>
          <div className="text-center">
            <h4 className="text-md">Expense</h4>
            <p className="text-red-500 font-semibold">{`-$${expense}`}</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <h3 className="text-xl mt-6">Transaction History</h3>
      <ul className="mt-4">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`flex justify-between p-4 my-2 rounded-lg shadow-md ${
              transaction.amount < 0 ? "bg-red-100" : "bg-green-100"
            }`}
          >
            <span>{transaction.text}</span>
            <span>{transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}</span>
            <button
              onClick={() => removeTransaction(transaction.id)}
              className="bg-red-500 text-white rounded px-3 py-1"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Add Transaction Form */}
      <h3 className="text-xl mt-6">Add a New Transaction</h3>
      <form onSubmit={addTransaction} className="mt-4">
        <div className="mb-4">
          <label className="block text-md font-medium" htmlFor="text">
            Text
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description..."
            className="w-full p-3 mt-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-medium" htmlFor="amount">
            Amount (negative for expense, positive for income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="w-full p-3 mt-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default ExpenseTracker;
