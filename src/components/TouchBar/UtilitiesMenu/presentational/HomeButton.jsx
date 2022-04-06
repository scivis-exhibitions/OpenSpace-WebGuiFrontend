import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../../../common/MaterialIcon/MaterialIcon';
import SmallLabel from '../../../common/SmallLabel/SmallLabel';
import styles from '../style/UtilitiesButtons.scss';
import i18next from 'i18next';

const HomeButton = props => (
  <div
    className={`${styles.UtilitiesButton}`}
    onClick={props.handleClick}
    role="button"
    tabIndex="0"
  >
    <Icon icon="home" className={styles.Icon} />
    <SmallLabel>{props.buttonText}</SmallLabel>
  </div>
);

HomeButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  uttonText: PropTypes.string.isRequired,
};

export default HomeButton;
