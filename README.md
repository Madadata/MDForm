# MDForm
[![Build Status](https://travis-ci.org/Madadata/MDForm.svg?branch=master)](https://travis-ci.org/Madadata/MDForm)
[![GitHub issues](https://img.shields.io/github/issues/Madadata/MDForm.svg)](https://github.com/Madadata/MDForm/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Madadata/MDForm/master/LICENSE)

[![NPM](https://nodei.co/npm/MDForm.png)](https://nodei.co/npm/MDForm/)

A light-weight react form component

# Demo
![demo](https://raw.githubusercontent.com/Madadata/MDForm/master/demo.gif)


# Properties

-----
* fields: array - array of configurations for input fields in your form. (required)
* buttons: array - array of configurations for button fields in your form. (required)
* url: string - the url you want your form to post or get. (default to '#')
* method: string - the method you want your form to apply. (default to 'POST')

## more specific proptypes
```
{
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
}
```
