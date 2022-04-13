interface NoteProps {
	id: string
	body: string
}

interface CreateNewFunc {
	(): void
}

interface UpdateNotesFunc {
	(text: string): void
}

interface FindCurrentNoteFunc {
	(): NoteProps
}

interface SideBarProps {
	notes: NoteProps[]
	currentNote: NoteProps
	setCurrentNoteId: React.Dispatch<React.SetStateAction<string>>
	createNewNote: CreateNewFunc
}

interface EditorProps {
	currentNote: NoteProps
	updateNote: UpdateNotesFunc
}

interface NoteElementProps {
	note: NoteProps,
	currentNoteId:string,
	setCurrentNoteID: React.Dispatch<React.SetStateAction<string>>
}
