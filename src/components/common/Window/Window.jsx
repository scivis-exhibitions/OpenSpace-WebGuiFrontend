import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import styles from './Window.scss';
import MaterialIcon from '../MaterialIcon/MaterialIcon';
import Button from '../Input/Button/Button';
import { excludeKeys } from '../../../utils/helpers';

const Window = (props) => {
  const { children, title, closeCallback, className, size, position } = props;
  return (
    <Draggable defaultPosition={position} handle=".header">
      <section
        className={`${styles.window} ${className}`}
        style={{
          width: size.width,
          height: size.height,
        }}
        {...excludeKeys(props, 'children title callback className closeCallback')}
      >
        <header className="header">
          <div className={styles.title}>
            { title }
          </div>
          { closeCallback && (
            <Button onClick={closeCallback} transparent small>
              <MaterialIcon icon="close" className="small" />
            </Button>
          )}
        </header>
        <section className={styles.filler}>
          { children }
        </section>
      </section>
    </Draggable>
  );
}

Window.propTypes = {
  children: PropTypes.node,
  closeCallback: PropTypes.func,
  className: PropTypes.string,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  size: PropTypes.shape({
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  title: PropTypes.string,
};

Window.defaultProps = {
  children: '',
  closeCallback: null,
  className: '',
  position: { x: 10, y: 10 },
  size: {width: '300px' },
  title: 'Window',
};

export default Window;
