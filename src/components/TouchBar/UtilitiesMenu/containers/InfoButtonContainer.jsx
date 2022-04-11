import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoButton from './../presentational/InfoButton';
import buttonStyle from '../style/UtilitiesButtons.scss';
import { withTranslation } from 'react-i18next';

class InfoButtonController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopover: false,
    };
  }

  render() {
    const { story } = this.props;
    return (
      <div className={`${buttonStyle.UtilitiesButton}`}>
          <InfoButton
            storyTitle={this.props.t('stories.' + story.identifier + '.title')}
            storyInfo={this.props.t('stories.' + story.identifier + '.info')}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  story: state.storyTree.story,
});

InfoButtonController = connect(
  mapStateToProps,
)(InfoButtonController);

InfoButtonController.propTypes = {
  story: PropTypes.objectOf(PropTypes.shape({})),
};

InfoButtonController.defaultProps = {
  story: {},
};

export default withTranslation()(InfoButtonController);
