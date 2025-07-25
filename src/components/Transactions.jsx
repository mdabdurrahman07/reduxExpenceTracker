import editImage from "../assets/images/edit.svg"
import deleteImage from "../assets/images/delete.svg"

const Transactions = () => {
  return (
    <div>
      <p className="second_heading">Your Transactions:</p>

      <div className="container_of_list_of_transactions">
        <ul>
          <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
              <p>৳ 100</p>
              <button className="link">
                <img className="icon" src={editImage} />
              </button>
              <button className="link">
                <img className="icon" src={deleteImage} />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
