import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box'
import Card from './Card'

import theme from './theme'

import styled from 'styled-components'

const TooltipContent = styled(Box)`
  // box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.08), 0 8px 8px 0 rgba(0, 0, 0, 0.08), 0 0 4px 0 rgba(0, 0, 0, 0.08);
  // ${({ isVisible }) => !isVisible && 'visibility: hidden;'}
  // background-color: ${({ bg }) => bg};
  // color: ${({ color }) => color};
  // // left: 20%; top: -10%;
  // padding: 10px;
  // padding: 5px 5px;
  // position: relative;
  // text-align: center;
  // // transform: translate(0,-150%);
  // // transition: opacity 0.2s;
  // white-space: nowrap;
  // z-index: 1;

  box-shadow: ${({theme}) => theme.boxShadows.slice(0, 3).join(', ')};

  color: ${({ color }) => color};
  position: relative;
  margin: 3em;
  padding: 1em;
  box-sizing: border-box;
  background: ${({ bg }) => bg};
  // box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.4);

  &::after{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    margin-left: -0.5em;
    bottom: -2em;
    left: 50%;
    box-sizing: border-box;

    border: 1em solid black;
    border-color: transparent transparent ${({ bg }) => bg} ${({ bg }) => bg};

    transform-origin: 0 0;
    transform: rotate(-45deg);

    box-shadow: -1.41px 1.41px 0 0 rgba(0,0,0,0.08), -9.66px 9.66px 8px 0 rgba(0,0,0,0.08), -16px 16px 16px 0 rgba(0,0,0,0.08);
    // box-shadow: 0 0 4px 0 rgba(0,0,0,0.08),0 8px 8px 0 rgba(0,0,0,0.08),0 16px 16px 0 rgba(0,0,0,0.08);
  }
`

const propTypes = {
  children: PropTypes.any.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
  isVisible: PropTypes.bool
}

const defaultProps = {
  position: 'bottom',
  color: theme.colors.black,
  bg: theme.colors.white,
  width: 'auto',
  align: 'right',
  renderContent: () => {}
}

class Tooltip extends React.Component {

  render() {
    return (
        <TooltipContent borderWidth={0} boxShadowSize={'lg'} {...this.props}>
          {this.props.children}
        </TooltipContent>
    )
  }
}

Tooltip.propTypes = propTypes
Tooltip.defaultProps = defaultProps

export default Tooltip
