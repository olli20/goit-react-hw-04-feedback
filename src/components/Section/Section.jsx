import PropTypes from 'prop-types';

import styles from './section.module.scss';

const Section = ({ children, title }) => {
    return (
        <div className={styles.section}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {children}
        </div>
    );
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}