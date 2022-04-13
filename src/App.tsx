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

	// try to rearrange the most recently-modified not to be at the top
	const updateNote: UpdateNotesFunc = (text) => {
		setNotes((notes: NoteProps[]): NoteProps[] => {
				const newArray = []
				for (let i = 0; i < notes.length; i++) {
					const oldNote = notes[i]
					if (oldNote.id === currentNoteId) {
						newArray.unshift({...oldNote, body: text})
					} else {
						newArray.push(oldNote)
					}
				}
				return newArray
			}
		)
	}

	// this does not rearrange the notes
	// const updateNote: UpdateNotesFunc = (text) => {
	// 	setNotes(
	// 		notes.map((note: NoteProps): NoteProps => (note.id === currentNoteId ? {...note, body: text} : note))
	// 	)
	// }

	const findCurrentNote: FindCurrentNoteFunc = () => {
		return notes.find(note => note.id === currentNoteId) || notes[0]
	}

	const deleteNote = (e: MouseEvent, noteId: string): NoteProps[] => {
		e.stopPropagation()
		setNotes(notes.filter(note=> note.id !==noteId))

		return []
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
							createNewNote={createNewNote}
							deleteNote={deleteNote}/>
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
