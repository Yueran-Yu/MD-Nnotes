import React, {FC} from 'react';
import NoteElement from "./NoteElement";
import {useNotesContext} from "../context/NotesProvider";

const Sidebar: FC = () => {
	const {
		notes,
		createNewNote,
		currentNoteId,
		setCurrentNoteId,
		deleteNote
	} = useNotesContext()

	return (
		<section className="pane sidebar">
			<div className="sidebar--header">
				<h3>Notes</h3>
				<button className="new-note" onClick={createNewNote}>+</button>
			</div>
			{
				notes.map((note: NoteProps) =>
					<NoteElement
						key={note.id}
						note={note}
						currentNoteId={currentNoteId}
						setCurrentNoteID={setCurrentNoteId}
						deleteNote={deleteNote}/>)
			}
		</section>
	)
}

export default Sidebar;
