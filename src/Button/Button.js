import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonBase = styled.button`
  background-color: #fff;
  border: 1px solid #707070;
  color: #2f2f2f;
  cursor: pointer;
  min-width: 80px;
  margin: 0 4px;
  padding: 0 22px;
  &:focus {
    outline: 0;
  };
  &:hover {
    color: #707070;
  };
  &:disabled {
    color: #aeaeae;
    border-color: #aeaeae;
    cursor: not-allowed;
  };
  ${props => props.btnType === 'rounded' ? RoundedButtonStyle : SquareButtonStyle };
  ${props => props.disabled ? null : ActiveButtonStyle};
`;

const RoundedButtonStyle = css`
  font-size: 12px;
  line-height: 22px;
  border-radius: 8px;
`;

const SquareButtonStyle = css`
  font-size: 14px;
  line-height: 30px;
  border-radius: 0;
`;

const ActiveButtonStyle = css`
  &:active {
    box-shadow: 0 0 0px 1px #2f2f2f inset;
    color: #2f2f2f;
  };
`;

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    btnType: PropTypes.oneOf(['square', 'rounded']),
  };
  static defaultProps = {
    btnType: 'square',
  };

  render() {
    return (
      <ButtonBase {...this.props}>
        {this.props.label}
      </ButtonBase>
    );
  }
}

export default Button;