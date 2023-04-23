import star from "../images/icon-star.svg";
import { useState } from "react";
import Thanks from "./Thanks";

const Rating = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState("");

  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setItems(number)}
        className="btn-number"
        onFocus={(e) => e.target.click()}
      >
        {number}
      </button>
    );
  };

  return (
    <div className="main">
      {!isSubmitted && (
        <div className="wrapper">
          <img src={star} className="star-icon" />
          <h2 className="main-text">How did we do?</h2>
          <p className="sub-text">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <ul className="rating-numbers">
            <li>
              <Button number={1} />
            </li>
            <li>
              <Button number={2} />
            </li>
            <li>
              <Button number={3} />
            </li>
            <li>
              <Button number={4} />
            </li>
            <li>
              <Button number={5} />
            </li>
          </ul>

          <div className="submit">
            <button onClick={() => setIsSubmitted(true)} className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      )}

      {isSubmitted && <Thanks items={items} />}
    </div>
  );
};
export default Rating;
