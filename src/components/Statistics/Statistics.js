import PropTypes from 'prop-types';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

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

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
