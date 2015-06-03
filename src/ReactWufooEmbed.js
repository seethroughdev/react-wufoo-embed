import React from 'react';
const {PropTypes, createClass} = React;

let ReactWufooEmbed = createClass({

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

	getDefaultProps() {
		return {
			userName: '',
			formHash: '',
			autoResize: true,
			height: '0',
			async: true,
			host: 'wufoo.com',
			header: 'show',
			ssl: true,
			embedJs: '/scripts/embed/form.js'
		};
	},


	/**
	 * Get the full url of the embed src
	 * @return {string} URL of embed
	 */
	getSrc() {
		return `https://www.${this.props.host}${this.props.embedJs}`;
	},


	/**
	 * Run the Embed Code
	 */
	embedForm() {
		let self = this;
		let form;
		let rs = this.readyState; if (rs) if (rs !== 'complete') if (rs !== 'loaded') return;
		try {
			form = new window.WufooForm();
			form.initialize(self.props);
			form.display();
		} catch (e) {}
	},


	/**
	 * Load the Wufoo Embed JS file
	 * @return {Object} script object created
	 */
	createScript() {
		const self = this;
		let s = document.createElement('script');
		s.src = this.getSrc();
		s.onload = s.onreadystatechange = function() {
			return self.embedForm();
		};
		let scr = document.getElementsByTagName('script')[0], par = scr.parentNode;
		par.insertBefore(s, scr);
		return scr;
	},

	componentWillMount() {
		typeof window.WufooForm !== 'function' ? this.createScript() : this.embedForm();
	},

	render() {
		return (<div id={`wufoo-${this.props.formHash}`}></div>);
	}

});

export default ReactWufooEmbed;
