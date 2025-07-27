import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransactions } from "../redux/features/transactions/transactionsSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const reset = () => {
    setAmount("");
    setName("");
    setType("");
  };
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      createTransactions({
        name,
        type,
        amount: Number(amount),
      })
    );
    reset();
  };
  const { isLoading, isError } = useSelector((state) => state.transactions);
  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            required
            name="name"
            placeholder="Enter Income or Expense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              required
              type="radio"
              value="income"
              name="type"
              checked={type === "income"}
              onChange={() => setType("income")}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              checked={type === "expense"}
              placeholder="Expense"
              onChange={() => setType("expense")}
            />
            <label>Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            required
            type="number"
            placeholder="300"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button disabled={isLoading} className="btn" type="submit">
          Add Transaction
        </button>
        {!isLoading && isError && <p className="error">An error occurred</p>}
        <button className="btn cancel_edit">Cancel Edit</button>
      </form>
    </div>
  );
};

export default Form;
