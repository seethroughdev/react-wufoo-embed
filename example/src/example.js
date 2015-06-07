import React from 'react';
import Wufoo from 'react-wufoo-embed';
const {createClass, render} = React;

let App = createClass({
	render () {
		return (
			<Wufoo
				userName="adaml"
				formHash="zkgmlhk086qrhp"
				header="hide"
			/>
		);
	}
});

render(<App />, document.getElementById('app'));
