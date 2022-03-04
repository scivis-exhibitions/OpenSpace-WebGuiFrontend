import React from 'react';
import FocusMenu from './FocusMenu/FocusMenu';
import Markers from './Markers/Markers';
import styles from './TouchBar.scss';
import UtilitiesMenu from './UtilitiesMenu/UtilitiesMenu';

const TouchBar = props => (
  <div className={styles.TouchBar}>
    <UtilitiesMenu resetStory={props.resetStory}/>
    <Markers />
  </div>
);

export default TouchBar;
