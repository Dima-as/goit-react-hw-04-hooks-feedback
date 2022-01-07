import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.scss";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const option = Object.keys(options);
  return (
    <ul className={s.list}>
      {option.map((btn) => (
        <li key={btn} className={s.item}>
          <button
            type="button"
            onClick={() => onLeaveFeedback(btn)}
            name={btn}
            className={s.btn}
          >
            {btn}
          </button>
        </li>
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
