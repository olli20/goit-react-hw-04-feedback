import PropTypes from 'prop-types';

import Section from '../Section';

import styles from './notification.module.scss';

const Notification = ({ message }) => {
    return (
        <Section>
            <p className={styles.message}>{message}</p>
        </Section>
    )
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}