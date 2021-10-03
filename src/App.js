import { useState } from 'react';
import buttons from './utils/buttons.json';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const count = arg => {
    switch (arg) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        alert('hello');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    if (good > 0) {
      return ((good / total) * 100).toFixed(1);
    }
  };
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={count} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </div>
  );
}

export default App;
