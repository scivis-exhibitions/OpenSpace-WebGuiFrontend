import React from 'react';
import Controllers from './containers/Controllers';
import HomeButtonContainer from './containers/HomeButtonContainer';
import InfoButtonController from './containers/InfoButtonContainer';
import HelpButton from './presentational/HelpButton';
import styles from './style/UtilitiesMenu.scss';

const UtilitiesMenu = (props) => (
  <div className={styles.UtilitiesMenu}>
    <section className={styles.Grid__Left}>
      <HomeButtonContainer resetStory={props.resetStory}/>
      <HelpButton />
      <InfoButtonController />
    </section>
    <section className={styles.Grid__Right}>
        <Controllers />
    </section>
  </div>
);

export default UtilitiesMenu;
