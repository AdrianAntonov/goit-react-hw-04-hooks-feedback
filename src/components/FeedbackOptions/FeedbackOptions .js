import React, { Component } from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
  };

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
