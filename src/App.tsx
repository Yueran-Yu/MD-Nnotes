import React, {FC} from 'react';
import Editor from './components/Editor';
import Sidebar from "./components/Sidebar";
import Split from 'react-split';
import {useNotesContext} from "./context/NotesProvider";
import {CreateNewNotes, NewNoteButton} from './styles';


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
					<CreateNewNotes>
						<h1>You have no notes</h1>
						<NewNoteButton onClick={createNewNote}>
							Create one now
						</NewNoteButton>
					</CreateNewNotes>
			}
		</div>
	)
}
export default App;
