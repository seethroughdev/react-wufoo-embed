import React from 'react';
import Wufoo from 'react-wufoo-embed';
const {createClass, render} = React;

let App = createClass({
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

render(<App />, document.getElementById('app'));
