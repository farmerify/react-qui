import { css } from 'styled-components';
import * as colors from 'styles/colors';

const base = css`
  cursor: pointer;
  min-width: 80px;
  margin: 0 4px;
  padding: 0 22px;
  &:focus {
    outline: 0;
  };
  &:hover {
    opacity: 0.8;
  };
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:active {
      box-shadow: inherit;
      color: inherit;
    };
  };
`;

export const defaultStyle = css`
  ${base};
  border: 1px solid ${colors.defaultBlack};
  background-color: #fff;
  color: ${colors.defaultBlack};
  &:active {
    box-shadow: 0 0 0px 1px ${colors.defaultBlack} inset;
    color: ${colors.defaultBlack};
  };
`;

export const primaryStyle = css`
  ${base};
  border: 1px solid ${colors.primaryBlue};
  background-color: ${colors.primaryBlue};
  color: #fff;
  &:active {
    opacity: 1;
  };
`;

export const successStyle = css`
  ${base};
  border: 1px solid ${colors.successGreen};
  background-color: ${colors.successGreen};
  color: #fff;
  &:active {
    opacity: 1;
  };
`;

export const warningStyle = css`
  ${base};
  border: 1px solid ${colors.warningOrange};
  background-color: ${colors.warningOrange};
  color: #fff;
  &:active {
    opacity: 1;
  };
`;

export const dangerStyle = css`
  ${base};
  border: 1px solid ${colors.dangerRed};
  background-color: ${colors.dangerRed};
  color: #fff;
  &:active {
    opacity: 1;
  };
`;

export const roundedButtonStyle = css`
  font-size: 12px;
  height: 22px;
  border-radius: 8px;
`;

export const squareButtonStyle = css`
  font-size: 14px;
  height: 30px;
  border-radius: 0;
`;