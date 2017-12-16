import React from 'react';
import withBreakpoints from './withBreakpoints';
import setShouldRender from '../util/set-should-render';
import PropTypes from '../util/shared-propTypes';

function ShowAt({ breakpoint, currentBreakpoint, children }) {
  let shouldRender;

  switch (currentBreakpoint) {
    case 'small':
      shouldRender = setShouldRender(['small', 'mediumAndBelow'], breakpoint, false);
      break;
    case 'medium':
      shouldRender = setShouldRender(['medium', 'mediumAndAbove', 'mediumAndBelow'], breakpoint, false);
      break;
    case 'large':
      shouldRender = setShouldRender(['mediumAndAbove', 'large'], breakpoint, false);
      break;
  }

  if (shouldRender) {
    return (<div>{ children }</div>);
  }
  return null;
}

ShowAt.propTypes = PropTypes;

ShowAt.displayName = 'ShowAt';

ShowAt.defaultProps = {
  breakpoint: '',
  currentBreakpoint: '',
  children: null,
};

const ShowAtWithBreakpoint = withBreakpoints(ShowAt);

export default ShowAtWithBreakpoint;
