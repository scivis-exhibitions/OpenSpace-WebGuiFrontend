import PropTypes from 'prop-types';
import React from 'react';
import SmallLabel from '../common/SmallLabel/SmallLabel';
import styles from './StoryButton.scss';

const StoryButton = ({ pickStory, storyIdentifier, buttonText }) => (
  <div className={styles.StoryButton} onClick={pickStory} id={storyIdentifier} role="button" tabIndex="0">
    <SmallLabel style={{fontSize:'calc(7px + 1vw)'}} id={storyIdentifier}>{buttonText}</SmallLabel>
  </div>
);

StoryButton.propTypes = {
  pickStory: PropTypes.func.isRequired,
  storyIdentifier: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default StoryButton;
