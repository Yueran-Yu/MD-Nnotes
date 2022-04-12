import React, {FC} from 'react';
import {NoteElementContainer, NoteElementTitle} from '../styles';

const NoteElement: FC<NoteElementProps> = ({noteId, index, currentNoteId, setCurrentNoteID}) => {
	return (
		<NoteElementContainer>
			<NoteElementTitle
				selectedNote={noteId === currentNoteId}
				onClick={() => setCurrentNoteID(noteId)}>
				<TextSnippet></TextSnippet>
			</NoteElementTitle>
		</NoteElementContainer>
	);
};

export default NoteElement;
