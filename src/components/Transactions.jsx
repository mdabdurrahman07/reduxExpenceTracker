import { useDispatch, useSelector } from "react-redux";
import Transaction from "./Transaction";
import Loading from "../utils/Loading";
import { useEffect } from "react";
import { fetchTransactions } from "../redux/features/transactions/transactionsSlice";

const Transactions = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, error, transactions } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isError && !isLoading && transactions?.length === 0) {
    content = <div className="col-span-12">No transactions found</div>;
  } else {
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transactions={transaction} />
    ));
  }
  return (
    <div>
      <p className="second_heading">Your Transactions:</p>

      <div className="container_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </div>
  );
};

export default Transactions;
