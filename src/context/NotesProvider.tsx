import React, {FC, createContext, ReactNode, useState, useEffect} from 'react';
import {nanoid} from "nanoid";

export const NotesContext = createContext<NotesContextProps>(
	{
		notes: [],
		findCurrentNote: () => ({id: '', body: ''}),
		currentNoteId: '',
		setCurrentNoteId: () => {},
		createNewNote: () => {},
		updateNote: () => {},
		deleteNote: () => {}
	})

const NotesProvider: FC<ReactNode> = ({children}) => {
	const [notes, setNotes] = useState<NoteProps[]>(
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

	const deleteNote = (e: MouseEvent, noteId: string): void => {
		e.stopPropagation()
		setNotes(notes.filter(note => note.id !== noteId))
	}

	const findCurrentNote: FindCurrentNoteFunc = () => {
		return notes.find(note => note.id === currentNoteId) || notes[0]
	}

	return (
		<NotesContext.Provider value={{
			notes,
			findCurrentNote,
			currentNoteId,
			setCurrentNoteId,
			createNewNote,
			updateNote,
			deleteNote,
		}}>
			{children}
		</NotesContext.Provider>
	);
};

export default NotesProvider;
