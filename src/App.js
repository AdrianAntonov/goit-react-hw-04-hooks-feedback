import React, { Component } from 'react';
import buttons from './utils/buttons.json';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  count = arg => {
    switch (arg) {
      case 1:
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 2:
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 3:
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
      default:
        alert('Missing option. Try again!');
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (good > 0) {
      return ((good / this.countTotalFeedback()) * 100).toFixed(1);
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={buttons} onLeaveFeedback={this.count} />
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
}

export default App;
