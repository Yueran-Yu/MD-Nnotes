import React, {FC, useState} from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import {useNotesContext} from "../context/NotesProvider";
import { PaneEditor } from '../styles';

const Editor: FC = () => {
	const {findCurrentNote, updateNote} = useNotesContext()

	const [selectedTab, setSelectedTab] = useState<"write" | "preview" | undefined>("write")

	const converter = new Showdown.Converter({
		tables: true,
		simplifiedAutoLink: true,
		strikethrough: true,
		tasklists: true
	})

	return (
		<PaneEditor>
			<ReactMde
				value={findCurrentNote().body}
				onChange={updateNote}
				onTabChange={setSelectedTab}
				selectedTab={selectedTab}
				generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
				minEditorHeight={80}
				heightUnits="vh"/>
		</PaneEditor>
	)
}

export default Editor;
