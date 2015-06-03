var React = require('react');
var Wufoo = require('react-wufoo-embed');
var App = React.createClass({
	render () {
		return (
			<div>
				<Wufoo
					userName="adaml"
					formHash="zkgmlhk086qrhp"
					header="hide"
				/>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
