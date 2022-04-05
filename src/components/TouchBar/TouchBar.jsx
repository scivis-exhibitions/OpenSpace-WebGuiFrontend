import React from 'react';
import FocusMenu from './FocusMenu/FocusMenu';
import Markers from './Markers/Markers';
import styles from './TouchBar.scss';
import UtilitiesMenu from './UtilitiesMenu/UtilitiesMenu';
import LanguageButton from '../common/LanguageButton/LanguageButton';

const TouchBar = props => (
  <div className={styles.TouchBar}>
    <UtilitiesMenu resetStory={props.resetStory}/>
    <Markers />
    <LanguageButton />
  </div>
);

export default TouchBar;
