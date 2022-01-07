import React, { useReducer } from "react";
import Section from "./Components/Section/Section";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";

import Statistics from "./Components/Statistics/Statistics";
function countReducer(prevState, nextState) {
  return prevState + nextState;
}
export default function App() {
  const [good, setGood] = useReducer(countReducer, 0);
  const [neutral, setNeutral] = useReducer(countReducer, 0);
  const [bad, setBad] = useReducer(countReducer, 0);

  const handleIncreament = (type) => {
    switch (type) {
      case "good":
        setGood(1);
        break;

      case "neutral":
        setNeutral(1);
        break;

      case "bad":
        setBad(1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={handleIncreament}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positiveFedback={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleIncreament = (e) => {
//     const { name } = e.target;
//     this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
//   };
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };
//   render() {
//     const { bad, good, neutral } = this.state;
//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={this.handleIncreament}
//         />
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={this.countTotalFeedback()}
//           positiveFedback={this.countPositiveFeedbackPercentage()}
//         />
//       </Section>
//     );
//   }
// }

// export default App;
