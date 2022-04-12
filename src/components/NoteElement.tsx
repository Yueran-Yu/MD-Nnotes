import React, {FC} from 'react';
import {NoteElementContainer, NoteElementTitle, TextSnippet} from '../styles';

const NoteElement: FC<NoteElementProps> = ({noteId, index, currentNoteId, setCurrentNoteID}) => {
	return (
		<NoteElementContainer>
			<NoteElementTitle
				selectedNote={noteId === currentNoteId}
				onClick={() => setCurrentNoteID(noteId)}>
				<TextSnippet>Note {index + 1}</TextSnippet>
			</NoteElementTitle>
		</NoteElementContainer>
	);
};

export default NoteElement;
