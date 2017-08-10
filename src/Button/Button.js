import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseButton from './base';
import * as colors from 'styles/colors';

/**
 * Button is used for interactions with clients, like Dialog waiting for confirmation, or further actions.
 *
*/

class Button extends Component {
  static propTypes = {
    /**
     * square button is used for confirmation, while rounded button is for general purpose in context.
     */
    btnType: PropTypes.oneOf(['square', 'rounded']),
    /**
     * five pre-defined colors, just for your preferences.
     */
    btnStyle: PropTypes.oneOf(['default', 'primary', 'warning', 'success', 'danger']),
    /**
     * Add additional className for button element.
     */
    className: PropTypes.string,
    /**
     * Content of buttons, can be a string, number or a React component.
     */
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    fullWidth: PropTypes.bool,
    /**
    * switch buttons between hollow status.
    */
    hollow: PropTypes.bool,
    onClick: PropTypes.func,
    /**
     * Add custom styles for the button style.
     */
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