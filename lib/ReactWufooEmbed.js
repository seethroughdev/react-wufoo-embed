'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var Wufoo = (function (_React$Component) {
    _inherits(Wufoo, _React$Component);

    function Wufoo(props) {
        _classCallCheck(this, Wufoo);

        _get(Object.getPrototypeOf(Wufoo.prototype), 'constructor', this).call(this, props);
        this.getSrc = this.getSrc.bind(this);
        this.embedForm = this.embedForm.bind(this);
        this.runScript = this.runScript.bind(this);
        this.createScript = this.createScript.bind(this);
    }

    /**
     * Get the full url of the embed src
     * @return {string} URL of embed
     */

    _createClass(Wufoo, [{
        key: 'getSrc',
        value: function getSrc() {
            return 'https://www.' + this.props.host + this.props.embedJs;
        }

        /**
         * Run the Embed Code
         */
    }, {
        key: 'embedForm',
        value: function embedForm() {
            var self = this;
            var form = undefined;
            var rs = this.readyState;
            if (rs && rs !== 'complete' && rs !== 'loaded') {
                return;
            }
            try {
                form = new window.WufooForm();
                form.initialize(self.props);
                form.display();
            } catch (e) {
                throw e;
            }
        }
    }, {
        key: 'runScript',
        value: function runScript() {
            return typeof window.WufooForm !== 'function' ? this.createScript() : this.embedForm();
        }

        /**
         * Load the Wufoo Embed JS file
         * @return {Object} script object created
         */
    }, {
        key: 'createScript',
        value: function createScript() {
            var self = this;
            var s = document.createElement('script');
            s.src = this.getSrc();
            s.onload = s.onreadystatechange = function () {
                return self.embedForm();
            };
            var scr = document.getElementsByTagName('script')[0];
            var par = scr.parentNode;
            par.insertBefore(s, scr);
            return scr;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.runScript();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.runScript();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement('div', { id: 'wufoo-' + this.props.formHash });
        }
    }]);

    return Wufoo;
})(_react2['default'].Component);

Wufoo.propTypes = {
    async: _propTypes2['default'].bool,
    autoResize: _propTypes2['default'].bool,
    defaultValues: _propTypes2['default'].string,
    embedJs: _propTypes2['default'].string,
    formHash: _propTypes2['default'].string.isRequired,
    header: _propTypes2['default'].oneOf(['show', 'hide']),
    height: _propTypes2['default'].string,
    host: _propTypes2['default'].string,
    ssl: _propTypes2['default'].bool,
    userName: _propTypes2['default'].string.isRequired
};

Wufoo.defaultProps = {
    async: true,
    autoResize: true,
    embedJs: '/scripts/embed/form.js',
    defaultValues: '',
    formHash: '',
    header: 'show',
    height: '0',
    host: 'wufoo.com',
    ssl: true,
    userName: ''
};

exports['default'] = Wufoo;
module.exports = exports['default'];