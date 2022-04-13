import React, {FC} from 'react';
import NoteElement from "./NoteElement";

const Sidebar: FC<SideBarProps> = ({notes, currentNote, setCurrentNoteId, createNewNote,deleteNote}) => {
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
						currentNoteId={currentNote.id}
						setCurrentNoteID={setCurrentNoteId}
					  deleteNote={deleteNote}/>)
			}
		</section>
	)
}

export default Sidebar;
