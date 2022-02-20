import PropTypes from "prop-types";
import s from "./Button.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <div>
            {options.map(option => (<button key={option} type="button" className={s.button} onClick={()=>onLeaveFeedback(option) }>
                {option}
            </button>))}
                    </div>)}
        
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.array,
 }      
export default FeedbackOptions;