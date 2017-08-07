import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as base from './base';
import * as colors from 'styles/colors';

const StyledButton = styled.button.attrs({
  mainColor: props => {
    switch (props.btnStyle) {
      case 'primary':
        return colors.primary;
      case 'success':
        return colors.success;
      case 'danger':
        return colors.danger;
      case 'warning':
        return colors.warning;
      default:
        return colors.defaultColor;
    }
  },
  hollow: props => props.hollow,
  fullWidth: props => props.fullWidth,
})`
  ${base.baseStyle};
  ${base.getBtnType};
  ${base.getBtnStyle};
  ${base.getBtnWidth};
`;

class Button extends Component {
  static propTypes = {
    btnType: PropTypes.oneOf(['square', 'rounded']),
    btnStyle: PropTypes.oneOf(['default', 'primary', 'warning', 'success', 'danger']),
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    fullWidth: PropTypes.bool,
    hollow: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
  };
  static defaultProps = {
    btnType: 'square',
    btnStyle: 'default',
    fullWidth: false,
    hollow: true,
  };

  render() {
    return (
      <StyledButton {...this.props}>
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;