import React, {FC} from 'react';
import Editor from './components/Editor';
import Sidebar from "./components/Sidebar";
import Split from 'react-split';
import {useNotesContext} from "./context/NotesProvider";


const App: FC<React.ReactNode> = (): JSX.Element => {
	const {notes, currentNoteId, createNewNote} = useNotesContext()

	return (

		<div className="App">
			{
				notes.length ?
					<Split
						sizes={[30, 70]}
						direction='horizontal'
						className='split'>
						<Sidebar/>
						{currentNoteId && notes.length > 0 && <Editor/>}
					</Split>
					:
					<div className="no-notes">
						<h1>You have no notes</h1>
						<button className="first-note" onClick={createNewNote}>
							Create one now
						</button>
					</div>
			}
		</div>
	);
}
export default App;
