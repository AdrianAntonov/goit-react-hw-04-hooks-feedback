import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

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
            onClick={() => this.props.onLeaveFeedback(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
