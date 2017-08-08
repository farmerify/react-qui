import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseButton from './base';
import * as colors from 'styles/colors';

/**
 * The only true button.
 *
 * @version 1.0.1
*/

class Button extends Component {
  static propTypes = {
    btnType: PropTypes.oneOf(['square', 'rounded']),
    /**
     * Gets called when the user clicks on the button
     *
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     * @param {Object} allProps All props of this Button
     */
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

  renderMainColor =  (style) => {
    switch (style) {
      case 'primary':
        return colors.primary;
      case 'danger':
        return colors.danger;
      case 'success':
        return colors.success;
      case 'warning':
        return colors.warning;
      default:
        return colors.defaultColor;
    }
  }

  render() {
    const mainColor = this.renderMainColor(this.props.btnStyle);
    return (
      <BaseButton {...this.props} mainColor={mainColor}>
        {this.props.children}
      </BaseButton>
    );
  }
}

export default Button;