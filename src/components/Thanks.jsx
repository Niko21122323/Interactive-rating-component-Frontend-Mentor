import thanks from "../images/illustration-thank-you.svg";

const Thanks = ({ items }) => {
  return (
    <div className="main-thanks">
      <div className="thanks-wrapper">
        <img src={thanks} className="thanks-img" />
        <div className="stars-selected">
          <p>You selected {items} out of 5</p>
        </div>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};
export default Thanks;
