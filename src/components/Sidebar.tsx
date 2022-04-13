import React, {FC} from 'react';
import NoteElement from "./NoteElement";
import {useNotesContext} from "../context/NotesProvider";
import {PaneSideBar, SideBarHeader, SideBarNewNoteButton} from "../styles";

const Sidebar: FC = () => {
	const {
		notes,
		createNewNote,
		currentNoteId,
		setCurrentNoteId,
		deleteNote
	} = useNotesContext()

	return (
		<PaneSideBar>
			<SideBarHeader>
				<h3>Notes</h3>
				<SideBarNewNoteButton onClick={createNewNote}>+</SideBarNewNoteButton>
			</SideBarHeader>
			{
				notes.map((note: NoteProps) =>
					<NoteElement
						key={note.id}
						note={note}
						currentNoteId={currentNoteId}
						setCurrentNoteID={setCurrentNoteId}
						deleteNote={deleteNote}/>)
			}
		</PaneSideBar>
	)
}

export default Sidebar;
