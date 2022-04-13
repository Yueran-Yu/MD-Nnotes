import React, {FC} from 'react';

const NoteElement: FC<NoteElementProps> = ({note, currentNoteId, setCurrentNoteID, deleteNote}) => {
	const noteName = JSON.stringify(note.body).slice(0,note.body.indexOf('\n'))
	return (
		<div className={`title ${note.id === currentNoteId ? "selected-note" : ""}`}
				 onClick={() => setCurrentNoteID(note.id)}>
			<h4 className="text-snippet">{noteName}</h4>
			<button className="delete-btn" onClick={(e)=>deleteNote(e,note.id)}>
				<i className="gg-trash trash-icon"></i>
			</button>
		</div>
	)
}

export default NoteElement;
