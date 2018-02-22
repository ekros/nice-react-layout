import React from 'react';
import PropTypes from 'prop-types';

const View = ({ children, width, height }) => {
  const styles = {
    view: {
      width,
      height,
    }
  };
  return (
    <div style={styles.view}>{children}</div>
  );
};

View.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
};

View.defaultProps = {
  width: "100vw",
  height: "100vh",
};

export default View;
