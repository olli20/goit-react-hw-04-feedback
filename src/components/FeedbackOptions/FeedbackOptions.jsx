import PropTypes from 'prop-types';

import Button from '../Button';
import Section from '../Section';
import styles from './feedback-options.module.scss';

const FeedbackOptions = ({ options, handleVote }) => {

  const buttons = options.map(button => {
    const { name, icon } = button;
    return <Button
      key={name}
      icon={icon}
      onClick={() => handleVote(name)}
      type="button"
      name={name}
    >{name}</Button>;
  });
    
  return (
    <Section title="Please leave feedback">
      <div className={styles.btnContainer}>
         {buttons}
      </div>
    </Section>
  );
}

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
    type: "submit",
    options: [],
}

FeedbackOptions.propTypes = {
    handleVote: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
    })).isRequired,
}
