import editImage from "../assets/images/edit.svg";
import deleteImage from "../assets/images/delete.svg";
import { useDispatch } from "react-redux";
import {
  editActive,
  removeTransactions,
} from "../redux/features/transactions/transactionsSlice";
const Transaction = ({ transactions }) => {
  const dispatch = useDispatch();
  const { amount, name, type, id } = transactions || {};
  const handleEdit = () => {
    dispatch(editActive(transactions));
  };
  const handleDelete = () => {
    dispatch(removeTransactions(id));
  };
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link" onClick={handleEdit}>
          <img className="icon" src={editImage} />
        </button>
        <button className="link" onClick={handleDelete}>
          <img className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
