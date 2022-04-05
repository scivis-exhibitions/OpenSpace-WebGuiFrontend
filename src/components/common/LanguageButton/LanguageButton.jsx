import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { icons } from '../../../api/resources';
import Icon from '../../common/MaterialIcon/MaterialIcon';
import styles from './LanguageButton.scss';
import i18n from "i18next";

class LanguageButton extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    
    this.state = {
      language: i18n.language
    };
  }

  get icon() {
    if(this.state.language === 'en') {
        const icon = icons["SweFlag"];
        if (icon) {
          return <img src={icon} className={styles.iconImage} />;
        }
        return <Icon icon="swedish" className={styles.Icon} />;
    }
    else{
        const icon = icons["EngFlag"];
        if (icon) {
          return <img src={icon} className={styles.iconImage} />;
        }
        return <Icon icon="english" className={styles.Icon} />;
    }
  }

  select() {
    if(this.state.language === 'sv') {
        i18n.changeLanguage('en');
        this.state.language = 'en';
    }
    else {
        i18n.changeLanguage('sv');
        this.state.language = 'sv';
    }
  }

  render() {
    return (
      <div 
        className={`${styles.LanguageButton} ${styles.active}`} 
        onClick={this.select} 
        role="button" 
        tabIndex="0"
      >
        { this.icon }
      </div>
    );
  }
}

export default LanguageButton;
