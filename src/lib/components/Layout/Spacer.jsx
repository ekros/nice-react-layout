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
  orientation: PropTypes.string,
  size: PropTypes.number,
};

export default Spacer;
