import React, {FC} from 'react';
import NoteElement from "./NoteElement";

const Sidebar: FC<SideBarProps> = ({notes, currentNote, setCurrentNoteId, createNewNote}) => {
	return (
		<section className="pane sidebar">
			<div className="sidebar--header">
				<h3>Notes</h3>
				<button className="new-note" onClick={createNewNote}>+</button>
			</div>
			{
				notes.map((note: NoteProps, index: number) =>
					<NoteElement
						key={note.id}
						noteId={note.id}
						index={index}
						currentNoteId={currentNote.id}
						setCurrentNoteID={setCurrentNoteId}/>)
			}
		</section>
	)
}

export default Sidebar;
