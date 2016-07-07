'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mdbutton = require('mdbutton');

var _mdbutton2 = _interopRequireDefault(_mdbutton);

var _MDForm = require('./MDForm.css');

var _MDForm2 = _interopRequireDefault(_MDForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MDForm = function (_Component) {
  _inherits(MDForm, _Component);

  function MDForm() {
    _classCallCheck(this, MDForm);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MDForm).apply(this, arguments));
  }

  _createClass(MDForm, [{
    key: 'getFieldsJSX',
    value: function getFieldsJSX() {
      var fields = this.props.fields;

      return fields.map(function (field, idx) {
        var fieldName = field.fieldName;
        var displayName = field.displayName;
        var type = field.type;
        var placeholder = field.placeholder;

        return _react2.default.createElement(
          'div',
          { className: _MDForm2.default.formGroup, key: idx },
          _react2.default.createElement(
            'label',
            {
              htmlFor: _MDForm2.default.prefix + '-' + fieldName,
              className: _MDForm2.default.formLabel
            },
            displayName,
            ':'
          ),
          _react2.default.createElement('input', {
            type: type || 'text',
            name: fieldName,
            className: _MDForm2.default.formInput,
            placeholder: placeholder || '',
            id: _MDForm2.default.prefix + '-' + fieldName
          })
        );
      });
    }
  }, {
    key: 'getButtonsJSX',
    value: function getButtonsJSX() {
      var buttons = this.props.buttons;

      return buttons.map(function (button, idx) {
        var text = button.text;
        var type = button.type;
        var redirect = button.redirect;
        var onClick = button.onClick;

        var buttonProps = {};
        buttonProps.key = idx;
        if (!!onClick) {
          buttonProps.onClick = onClick;
        }
        if (!!redirect) {
          buttonProps.href = redirect;
        }
        if (!!type) {
          buttonProps.type = type;
        }
        return _react2.default.createElement(
          _mdbutton2.default,
          buttonProps,
          text
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var url = _props.url;
      var method = _props.method;

      var fieldsJSX = this.getFieldsJSX();
      var buttonsJSX = this.getButtonsJSX();

      return _react2.default.createElement(
        'div',
        { className: _MDForm2.default.container },
        _react2.default.createElement(
          'form',
          { method: method || 'POST', action: url || '#', className: _MDForm2.default.form },
          _react2.default.createElement(
            'div',
            { className: _MDForm2.default.inputsGroup },
            fieldsJSX
          ),
          _react2.default.createElement(
            'div',
            { className: _MDForm2.default.buttonsGroup },
            buttonsJSX
          )
        )
      );
    }
  }]);

  return MDForm;
}(_react.Component);

MDForm.propTypes = {
  fields: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    fieldName: _react.PropTypes.string.isRequired,
    displayName: _react.PropTypes.string.isRequired,
    type: _react.PropTypes.string
  })),
  buttons: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    text: _react.PropTypes.string.isRequired,
    type: _react.PropTypes.string,
    redirect: _react.PropTypes.string,
    onClick: _react.PropTypes.func
  })),
  url: _react.PropTypes.string,
  method: _react.PropTypes.oneOf(['GET', 'POST'])
};

exports.default = MDForm;