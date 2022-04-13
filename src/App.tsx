import React, {FC, useState, useEffect} from 'react';
import Editor from './components/Editor';
import Sidebar from "./components/Sidebar";
import {nanoid} from 'nanoid';
import Split from 'react-split';


const App: FC<React.ReactNode> = (): JSX.Element => {
	const [notes, setNotes] = useState<NoteProps[]>(
		// lazy state initialization
		() => JSON.parse(localStorage.getItem("notes") || "[]") || [])
	const [currentNoteId, setCurrentNoteId] = useState<string>((notes[0] && notes[0].id) || '')

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes))
	}, [notes])

	const createNewNote: CreateNewFunc = () => {
		const newNote = {
			id: nanoid(),
			body: "# Type your markdown note's title here"
		}
		setNotes([newNote, ...notes])
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
							createNewNote={createNewNote}/>
						{
							currentNoteId &&
							notes.length > 0 &&
              <Editor
                currentNote={findCurrentNote()}
                updateNote={updateNote}
              />}
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
