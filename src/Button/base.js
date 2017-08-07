import { css } from 'styled-components';

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

export const baseStyle = css`
  cursor: pointer;
  min-width: 80px;
  margin: 0 4px;
  padding: 0 22px;
  border: ${props => `1px solid ${props.mainColor}`};

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

export const getBtnType = css`
  ${props => props.btnType === 'rounded' ? roundedStyle : squareStyle};
`;

export const getBtnStyle = css`
  color: ${props => props.hollow ? props.mainColor : 'white'};
  border: ${props => props.mainColor};
  background-color: ${props => props.hollow ? 'transparent' : props.mainColor};

  &:active {
    ${props => props.hollow ? `box-shadow: 0 0 0 1px ${props.mainColor}` : null};
  }
`;

export const getBtnWidth = css`
  ${props => props.fullWidth ? 'width: 100%' : null};
`;