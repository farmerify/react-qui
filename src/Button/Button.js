import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import BaseStyle from './base';

const RoundedButtonStyle = css`
  font-size: 12px;
  height: 22px;
  border-radius: 8px;
`;

const SquareButtonStyle = css`
  font-size: 14px;
  height: 30px;
  border-radius: 0;
`;

const ActiveButtonStyle = css`
  &:active {
    box-shadow: 0 0 0px 1px #2f2f2f inset;
    color: #2f2f2f;
  };
`;

const ButtonBase = styled.button`
  ${BaseStyle};
  ${props => props.btnType === 'rounded' ? RoundedButtonStyle : SquareButtonStyle };
  ${props => props.disabled ? null : ActiveButtonStyle};
`;

class Button extends Component {
  static propTypes = {
    children: PropTypes.element,
    btnType: PropTypes.oneOf(['square', 'rounded']),
  };
  static defaultProps = {
    btnType: 'square',
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