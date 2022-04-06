import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CenteredLabel from '../common/CenteredLabel/CenteredLabel';
import styles from './Slide.scss';
import StoryButton from './StoryButton';
import { withTranslation } from 'react-i18next';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.handleStory = this.handleStory.bind(this);
  }

  handleStory(e) {
    this.props.onChangeStory(e.target.id);
  }

  render() {
    const { image, storyInfo } = this.props;

    return (
      <div className={styles.Container}>
        <img src={image} className={styles.Slide} alt={'Story'} />
        <div className={styles.StoryInfo}>
          <CenteredLabel className={styles.StoryName}>{this.props.t('stories.' + storyInfo.identifier + '.slide.title')}</CenteredLabel>
          <CenteredLabel className={styles.Description}>{this.props.t('stories.' + storyInfo.identifier + '.slide.info')}</CenteredLabel>
          <StoryButton
            pickStory={this.handleStory}
            storyIdentifier={storyInfo.identifier}
            buttonText={this.props.t('slide.button')}
          />
        </div>
      </div>
    );
  }
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  onChangeStory: PropTypes.func.isRequired,
  storyInfo: PropTypes.shape({
    identifier: PropTypes.string
  }).isRequired,
};

export default withTranslation()(Slide);
