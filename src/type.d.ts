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
	newNote: CreateNewFunc
}

interface EditorProps {
	currentNote: NoteProps
	updateNote: UpdateNotesFunc
}
