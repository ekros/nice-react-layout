import React from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel.jsx';

const Spacer = ({ orientation, size }) => {
  return (
    <Panel
      fixed
      width={orientation === 'horizontal' ? size : null}
      height={orientation === 'vertical' ? size : null}
      flex="none"
    ></Panel>
  );
};

Spacer.propTypes = {
  name: PropTypes.string,
  orientation: PropTypes.string,
  size: PropTypes.number,
};

Spacer.defaultProps = {
  name: "spacer",
};

export default Spacer;
