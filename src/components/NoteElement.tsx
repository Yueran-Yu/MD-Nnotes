import React, {FC} from 'react';

const NoteElement: FC<NoteElementProps> = ({noteId, index, currentNoteId, setCurrentNoteID}) => {
	return (
		<div className={`title ${noteId === currentNoteId ? "selected-note" : ""}`}
				 onClick={() => setCurrentNoteID(noteId)}>
			<h4 className="text-snippet">Note {index + 1}</h4>
		</div>
	)
}

export default NoteElement;
