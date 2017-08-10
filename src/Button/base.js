import styled, { css } from 'styled-components';

const roundedStyle = css`
  font-size: 12px;
  height: 22px;
  border-radius: 8px;
`;

const squareStyle = css`
  font-size: 14px;
  height: 30px;
  border-radius: 0;
`;

const baseStyle = css`
  cursor: pointer;
  min-width: 80px;
  padding: 0 22px;
  border: 1px solid black;

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:active {
      box-shadow: inherit;
      color: inherit;
      opacity: 1;
    }
  }
`;

const handleBtnType = css`
  ${props => props.btnType === 'rounded' ? roundedStyle : squareStyle};
`;

const handleBtnStyle = css`
  ${baseStyle};
  color: ${props => props.hollow ? props.mainColor : 'white'};
  border-color: ${props => props.mainColor};
  background-color: ${props => props.hollow ? 'transparent' : props.mainColor};

  &:active {
    opacity: 1;
    ${props => props.hollow ? `box-shadow: 0 0 0 1px ${props.mainColor} inset` : null};
  }
`;

const handleBtnWidth = css`
  ${props => props.fullWidth ? 'width: 100%' : null};
`;

const BaseButton = styled.button`
  ${handleBtnType};
  ${handleBtnStyle};
  ${handleBtnWidth};
`;

export default BaseButton;