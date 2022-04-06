import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggleBoolButton from './ToggleBoolButton';
import i18next from "i18next";
import { withTranslation } from 'react-i18next';

class ToggleBoolButtons extends Component {
  constructor(props) {
    super(props);
    this.handleGroup = this.handleGroup.bind(this);
    this.toggleButtons = [];
    
    this.languageUpdate = this.languageUpdate.bind(this);
    //i18next.on('languageChanged', this.languageChanged);
  }
 
  handleGroup(clickedProperty) {
    const { properties } = this.props;
    properties.map((p, i) => {
      if (clickedProperty.property.URI !== p.URI && clickedProperty.property.group === p.group) {
        if(this.toggleButtons[p.URI] !== null) {
            this.toggleButtons[p.URI].disableIfChecked();
        }
      }
    });
  }
  
  languageUpdate(thisProperty) {
    const { properties } = this.props;
    properties.map((p, i) => {
      if (thisProperty.property.URI !== p.URI) {
          if(this.toggleButtons[p.URI] !== null) {
            this.toggleButtons[p.URI].updateMultiLang();
          }
      }
    });
  }

  get propertiesButtons() {
    const { properties } = this.props;
    return (
      properties.map((property, i) => (
        <ToggleBoolButton
          ref={ref => this.toggleButtons[property.URI] = ref}
          key={property.URI}
          property={property}
          handleGroup={this.handleGroup}
          languageUpdate={this.languageUpdate}
        />
      ))
    );
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        {this.propertiesButtons}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const properties = state.storyTree.story.toggleboolproperties;
  return {
    properties,
  };
};

ToggleBoolButtons = connect(
  mapStateToProps,
)(ToggleBoolButtons);

export default withTranslation()(ToggleBoolButtons);
