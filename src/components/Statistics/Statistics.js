import React, { Component } from 'react';

export class Statistics extends Component {
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
