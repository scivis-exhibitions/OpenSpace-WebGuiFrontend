import React, { useEffect, useState } from 'react';
import { instructionImageENG, instructionImageSWE } from '../../../../api/resources';
import Icon from '../../../common/MaterialIcon/MaterialIcon';
import SmallLabel from '../../../common/SmallLabel/SmallLabel';
import styles from '../style/UtilitiesButtons.scss';
import i18next from 'i18next';

const HelpButton = props => {
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
      setShowInstructions(true);
  }, []);

  useEffect(() => {
    if(showInstructions){
      const timeout = setTimeout(() => {
          setShowInstructions(false)
      }, 9500); // match with animation-delay in UtilitiesButtons.scss
      return () => { clearTimeout(timeout); };
    }
  }, [showInstructions]);
 
  return (
    <div
      className={`${styles.UtilitiesButton}
      ${showInstructions && styles.active}`}
      onClick={() => setShowInstructions(!showInstructions)}
      role="button"
      tabIndex="0"
    >
      <Icon icon="help_outline" className={styles.Icon} />
      { showInstructions && <img src={i18next.language === "swe" ? instructionImageSWE : instructionImageENG} className={styles.Instructions} alt={'instructions'} />}
      <SmallLabel>{i18next.t('touchbar.help')}</SmallLabel>
    </div>
  );

}

export default HelpButton;
