import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as baseStyle from './base';

const ButtonBase = styled.button`
  ${props => props.btnType === 'rounded' ? baseStyle.roundedButtonStyle : baseStyle.squareButtonStyle };
  ${props => {
    switch (props.btnStyle) {
      case 'primary':
        return baseStyle.primaryStyle;
      case 'warning':
        return baseStyle.warningStyle;
      case 'success':
        return baseStyle.successStyle;
      case 'danger':
        return baseStyle.dangerStyle;
      default:
        return baseStyle.defaultStyle;
    };
  }};
  ${props => props.fullWidth ? 'width: 100%' : null};
`;

class Button extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    btnType: PropTypes.oneOf(['square', 'rounded']),
    btnStyle: PropTypes.oneOf(['default', 'primary', 'warning', 'success', 'danger']),
    fullWidth: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
  };
  static defaultProps = {
    btnType: 'square',
    btnStyle: 'default',
    fullWidth: false,
  };

  render() {
    return (
      <ButtonBase {...this.props}>
        {this.props.children}
      </ButtonBase>
    );
  }
}

export default Button;