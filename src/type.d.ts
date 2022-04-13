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
	deleteNote: (e:MouseEvent<HTMLButtonElement>, noteId:string)=>NoteProps[]
}

interface EditorProps {
	currentNote: NoteProps
	updateNote: UpdateNotesFunc
}

interface NoteElementProps {
	note: NoteProps,
	currentNoteId:string,
	setCurrentNoteID: React.Dispatch<React.SetStateAction<string>>
	deleteNote: (e:MouseEvent<HTMLButtonElement>, noteId:string)=>NoteProps[]

}
