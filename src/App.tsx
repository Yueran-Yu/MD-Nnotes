import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<div className="App">
			Hello
			<Sidebar />
			<Editor/>
		</div>
	);
}

export default App;
