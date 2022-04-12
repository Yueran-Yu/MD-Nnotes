import React, {FC} from 'react';
import {BarHeader, NewNoteBtn, PaneSideBar} from '../styles';
import NoteElement from "./NoteElement";


const Sidebar: FC<SideBarProps> = ({notes, currentNote, setCurrentNoteId, newNote}) => {
	return (
		<PaneSideBar>
			<BarHeader>
				<h3>Notes</h3>
				<NewNoteBtn onClick={newNote}>+
				</NewNoteBtn>
			</BarHeader>
			{
				notes.map((note: NoteProps, index: number) =>
					<NoteElement
						key={note.id}
						noteId={note.id}
						index={index}
						currentNoteId={currentNote.id}
						setCurrentNoteID={setCurrentNoteId}/>)
			}
		</PaneSideBar>
	);
};

export default Sidebar;
