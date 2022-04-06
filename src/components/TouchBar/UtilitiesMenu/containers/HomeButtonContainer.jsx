import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetStoryTree } from '../../../../api/Actions';
import HomeButton from '../presentational/HomeButton';
import IdleTimer from 'react-idle-timer';
import styles from '../style/UtilitiesButtons.scss';
import { withTranslation } from 'react-i18next';

class HomeButtonContainer extends Component {
  constructor(props) {
    super(props);

    this.goToMenu = this.goToMenu.bind(this);
    
    this.idleTimer = null
  }

  goToMenu() {
    this.props.ResetStoryTree(true);
    this.props.resetStory();
  }

  render() {
    return (
      <HomeButton handleClick={this.goToMenu} buttonText={this.props.t('touchbar.home')}>
            <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          timeout={1000 * 60 * 10}
          onIdle={this.goToMenu}
          debounce={250}
        />
      </HomeButton>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ResetStoryTree: (reset) => {
    dispatch(resetStoryTree(reset));
  },
});

HomeButtonContainer = connect(
  null,
  mapDispatchToProps,
)(HomeButtonContainer);


HomeButtonContainer.propTypes = {
  ResetStoryTree: PropTypes.func,
};

HomeButtonContainer.defaultProps = {
  ResetStoryTree: () => {},
};

export default withTranslation()(HomeButtonContainer);
