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
