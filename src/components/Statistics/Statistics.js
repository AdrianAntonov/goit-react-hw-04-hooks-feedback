import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    positivePercentage: PropTypes.string,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <h4>Statistics content</h4>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage ? positivePercentage : 0}%</p>
      </div>
    );
  }
}

export default Statistics;
