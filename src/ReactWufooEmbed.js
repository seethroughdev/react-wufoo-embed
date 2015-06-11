import React from 'react';
const {PropTypes, createClass} = React;

let Wufoo = createClass({

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

	runScript() {
		return typeof window.WufooForm !== 'function' ? this.createScript() : this.embedForm();
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

	componentDidUpdate() {
		this.runScript();
	},

	componentWillMount() {
		this.runScript();
	},

	render() {
		return (<div {...this.props} id={`wufoo-${this.props.formHash}`}></div>);
	}

});

export default Wufoo;
