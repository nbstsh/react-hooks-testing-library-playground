import React from 'react';
import './App.css';
import Increment from './components/increment/increment.component';
import { IncrementProvider } from './components/increment/increment.context';

function App() {
	return (
		<div className='App'>
			<IncrementProvider>
				<Increment />
			</IncrementProvider>
		</div>
	);
}

export default App;
