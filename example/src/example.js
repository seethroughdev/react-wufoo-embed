import React from 'react';
import ReactDOM from 'react-dom';
import Wufoo from 'react-wufoo-embed';

let App = function () {
    return (
        <Wufoo
            userName="adaml"
            formHash="zkgmlhk086qrhp"
            header="hide"
        />
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
