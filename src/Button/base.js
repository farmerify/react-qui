import { css } from 'styled-components';

const BaseStyle = css`
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
    opacity: 0.8;
  };
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  };
`;

export default BaseStyle;
