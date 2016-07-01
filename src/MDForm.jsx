import React, { Component, PropTypes } from 'react';
import MDButton from 'mdbutton';
import styles from './MDForm.css';


class MDForm extends Component {

  constructor() {
    super();
  }

  getFieldsJSX() {
    const { fields } = this.props;
    return fields.map((field, idx) => {
      const { fieldName, displayName, type, placeholder } = field;
      return (
        <div className={styles.formGroup} key={idx}>
          <label
            htmlFor={`${styles.prefix}-${fieldName}`}
            className={styles.formLabel}
          >
            {displayName}:
          </label>
          <input
            type={type || 'text'}
            name={fieldName}
            className={styles.formInput}
            placeholder={placeholder || ''}
            id={`${styles.prefix}-${fieldName}`}
          />
        </div>
      );
    });
  }

  getButtonsJSX() {
    const { buttons } = this.props;
    return buttons.map((button, idx) => {
      const { text, type, redirect, onClick } = button;
      let buttonProps = {}
      buttonProps.key = idx;
      if (!!onClick) { buttonProps.onClick = onClick; }
      if (!!redirect) { buttonProps.href = redirect; }
      if (!!type) { buttonProps.type = type; }
      return <MDButton {...buttonProps}>{text}</MDButton>;
    })
  }

  render() {
    const { url, method } = this.props;
    const fieldsJSX = this.getFieldsJSX();
    const buttonsJSX = this.getButtonsJSX();

    return (
      <div className={styles.container}>
        <form method={method || 'POST'} action={url || '#'} className={styles.form}>
          <div className={styles.inputsGroup}>{fieldsJSX}</div>
          <div className={styles.buttonsGroup}>{buttonsJSX}</div>
        </form>
      </div>
    );
  }

}

MDForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    fieldName: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    type: PropTypes.string,
  })),
  buttons: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    redirect: PropTypes.string,
    onClick: PropTypes.func,
  })),
  url: PropTypes.string,
  method: PropTypes.oneOf(['GET', 'POST']),
};

export default MDForm;
