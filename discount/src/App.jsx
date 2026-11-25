import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [saved, setSaved] = useState(0);

  const calculate = () => {
    const price = Number(amount);
    const discountValue = Number(discount);

    if (price <= 0 || discountValue < 0) {
      alert("Please enter valid values");
      return;
    }

    const savedAmount = (price * discountValue) / 100;
    const finalPrice = price - savedAmount;

    setSaved(savedAmount);
    setNewPrice(finalPrice);
  };

  const reset = () => {
    setAmount("");
    setDiscount("");
    setNewPrice(0);
    setSaved(0);
  };

  return (
    <div className="main-container">

      <h2>DISCOUNT CALCULATOR</h2>

      <p className="subtitle">
        Calculate your savings and the ultimate discount at your fingertips.
      </p>

      <div className="calculator">

        {/* Result Section */}
        <div className="result-box">

          <div className="icon">↻</div>

          <h3>Amount Paid</h3>
          <p>New Price</p>

          <h2 className="new-price">
            ₹{newPrice.toFixed(2)}
          </h2>

          <div className="details">

            <div>
              <p>Amount Saved</p>
              <span>₹{saved.toFixed(2)}</span>
            </div>

            <div>
              <p>Price Difference</p>
              <span>₹{saved.toFixed(2)}</span>
            </div>

          </div>

        </div>

        {/* Input Section */}
        <div className="input-box">

          <div className="discount-image">
            <strong>20%</strong>
            <span>OFF</span>
            <small>GET20</small>
          </div>

          <label>Enter Amount (₹)</label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="₹"
          />

          <label>Enter Discount (%)</label>

          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="%"
          />

          <div className="buttons">

            <button onClick={calculate}>
              CALCULATE
            </button>

            <button onClick={reset}>
              RESET
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
