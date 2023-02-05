import PropTypes from 'prop-types';

import Section from '../Section';

import styles from './statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Section title="Statictics">
            <p className={styles.label}>Good: {good}</p>
            <p className={styles.label}>Neutral: {neutral}</p>
            <p className={styles.label}>Bad: {bad}</p>
            <p className={styles.label}>Total: {total}</p>
            <p className={styles.label}>Positive feedback: {positivePercentage}%</p>
        </Section>
    );
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}