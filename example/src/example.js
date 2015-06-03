var React = require('react');
var ReactWufooEmbed = require('react-wufoo-embed');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactWufooEmbed
					userName="adaml"
					formHash="z1wreuea0g3871y"
					header="hide"
				/>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
