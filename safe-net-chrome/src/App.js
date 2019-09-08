import React from 'react';
import Button from './Button';
import * as blockstack from 'blockstack'

import './App.css';

function App() {
	return (
		<div className="App">
			<h1>Safe.net</h1>
			<Button text="Sign In with Blockstack" />
		</div>
	);
}

export default App;
