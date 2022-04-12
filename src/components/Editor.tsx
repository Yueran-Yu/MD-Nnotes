import React, {FC, useState} from 'react'
import ReactMde from 'react-mde'
import Showdown from 'showdown'
import {PaneEditor} from '../styles';

const Editor: FC<EditorProps> = ({currentNote, updateNote}) => {

	const converter = new Showdown.Converter({
		tables: true,
		simplifiedAutoLink: true,
		strikethrough: true,
		tasklists: true
	})

	const [selectedTab, setSelectedTab] = useState<string>("write")

	return (
		<PaneEditor>
			<ReactMde
				value={currentNote.body}
				onChange={updateNote}
				onTabChange={setSelectedTab}
				generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
				minEditorHeight={80}
				heightUnits="vh"/>
		</PaneEditor>
	);
};

export default Editor;
