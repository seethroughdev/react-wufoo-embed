'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var PropTypes = _react2['default'].PropTypes;
var createClass = _react2['default'].createClass;

var Wufoo = createClass({

	propTypes: {
		async: PropTypes.bool,
		autoResize: PropTypes.bool,
		embedJs: PropTypes.string,
		formHash: PropTypes.string.isRequired,
		header: PropTypes.oneOf(['show', 'hide']),
		height: PropTypes.string,
		host: PropTypes.string,
		ssl: PropTypes.bool,
		userName: PropTypes.string.isRequired
	},

	getDefaultProps: function getDefaultProps() {
		return {
			async: true,
			autoResize: true,
			embedJs: '/scripts/embed/form.js',
			formHash: '',
			header: 'show',
			height: '0',
			host: 'wufoo.com',
			ssl: true,
			userName: ''
		};
	},

	/**
  * Get the full url of the embed src
  * @return {string} URL of embed
  */
	getSrc: function getSrc() {
		return 'https://www.' + this.props.host + this.props.embedJs;
	},

	/**
  * Run the Embed Code
  */
	embedForm: function embedForm() {
		var self = this;
		var form = undefined;
		var rs = this.readyState;if (rs) if (rs !== 'complete') if (rs !== 'loaded') return;
		try {
			form = new window.WufooForm();
			form.initialize(self.props);
			form.display();
		} catch (e) {}
	},

	runScript: function runScript() {
		return typeof window.WufooForm !== 'function' ? this.createScript() : this.embedForm();
	},

	/**
  * Load the Wufoo Embed JS file
  * @return {Object} script object created
  */
	createScript: function createScript() {
		var self = this;
		var s = document.createElement('script');
		s.src = this.getSrc();
		s.onload = s.onreadystatechange = function () {
			return self.embedForm();
		};
		var scr = document.getElementsByTagName('script')[0],
		    par = scr.parentNode;
		par.insertBefore(s, scr);
		return scr;
	},

	componentDidUpdate: function componentDidUpdate() {
		this.runScript();
	},

	componentDidMount: function componentDidMount() {
		this.runScript();
	},

	render: function render() {
		return _react2['default'].createElement('div', { id: 'wufoo-' + this.props.formHash });
	}

});

exports['default'] = Wufoo;
module.exports = exports['default'];