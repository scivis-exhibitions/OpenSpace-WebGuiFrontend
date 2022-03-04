import PropTypes from 'prop-types';
import React from 'react';
import Dot from './Dot';
import styles from './Dots.scss';
import stories from '../../../stories/stories.json';

const Dots = ({ index, imagePaths, dotClick }) => {
  // Map the dots and the images
  const dotsGroup = stories.stories.map((story, i) => {
    const active = (i === index);
    return (
      <Dot
        key={imagePaths[i]}
        storyId={i}
        active={active}
        dotClick={dotClick}
      />
    );
  });

  return (
    <div className={styles.DotsContainer}>
      { dotsGroup }
    </div>
  );
};

Dots.defaultProps = {
  imagePaths: null,
};

Dots.propTypes = {
  index: PropTypes.number.isRequired,
  imagePaths: PropTypes.arrayOf(PropTypes.string),
  dotClick: PropTypes.func.isRequired,
};

export default Dots;
