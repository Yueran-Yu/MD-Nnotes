import React, {FC, useState} from 'react';
import Editor from './components/Editor';
import Sidebar from "./components/Sidebar";
import {CreateNotePage, FirstNote} from './styles';
import {nanoid} from 'nanoid';
import Split from 'react-split';


const App: FC<React.ReactNode> = (): JSX.Element => {
	const [notes, setNotes] = useState<NoteProps[]>([])
	const [currentNoteId, setCurrentNoteId] = useState<string>((notes[0] && notes[0].id) || '')

	const createNewNote: CreateNewFunc = () => {
		const newNote = {
			id: nanoid(),
			body: "#  Type your markdown note's title here"
		}
		setNotes([...notes, newNote])
		setCurrentNoteId(newNote.id)
	}

	const updateNote: UpdateNotesFunc = (text) => {
		setNotes(
			notes.map((note: NoteProps): NoteProps => (note.id === currentNoteId ? {...note, body: text} : note))
		)
	}

	const findCurrentNote: FindCurrentNoteFunc = () => {
		return notes.find(note => note.id === currentNoteId) || notes[0]
	}

	return (
		<div className="App">
			{
				notes.length ?
					<Split
						sizes={[30, 70]}
						direction='horizontal'
						className='split'>
						<Sidebar
						 notes={notes}
						 currentNote={findCurrentNote()}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}/>
						<Editor
							currentNote={findCurrentNote()}
							updateNote={updateNote}
						/>
					</Split>
					:
					<CreateNotePage>
						<h1>You have no notes</h1>
						<FirstNote onClick={createNewNote}>
							Create one now
						</FirstNote>
					</CreateNotePage>
			}
		</div>
	);
}

export default App;
