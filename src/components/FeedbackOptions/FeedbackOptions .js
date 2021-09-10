import React, { Component } from 'react';
import styles from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.options.map(item => (
          <button
            className={styles.button}
            key={item.id}
            onClick={() => this.props.onLeaveFeedback(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
