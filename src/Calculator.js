import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    if (num2 === "0") {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-center text-2xl font-semibold mb-4">Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
        className="w-full p-2 mb-3 border rounded"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="flex flex-wrap justify-between gap-2 mb-4">
        <button
          onClick={add}
          className="bg-blue-500 text-white px-4 py-2 rounded w-[48%]"
        >
          Add
        </button>

        <button
          onClick={subtract}
          className="bg-green-500 text-white px-4 py-2 rounded w-[48%]"
        >
          Subtract
        </button>

        <button
          onClick={multiply}
          className="bg-yellow-500 text-white px-4 py-2 rounded w-[48%]"
        >
          Multiply
        </button>

        <button
          onClick={divide}
          className="bg-red-500 text-white px-4 py-2 rounded w-[48%]"
        >
          Divide
        </button>
      </div>

      <div className="text-center text-lg font-medium">
        Result: {result}
      </div>
    </div>
  );
};

export default Calculator;
