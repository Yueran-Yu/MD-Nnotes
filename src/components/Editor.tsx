import React, {FC, useContext, useState} from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import {NotesContext} from "../context/NotesProvider";

const Editor: FC = () => {
	const {findCurrentNote,updateNote } = useContext(NotesContext) as NotesContextProps

	const [selectedTab, setSelectedTab] = useState<"write" | "preview" | undefined>("write")

	const converter = new Showdown.Converter({
		tables: true,
		simplifiedAutoLink: true,
		strikethrough: true,
		tasklists: true
	})

	return (
		<section className="pane editor">
			<ReactMde
				value={findCurrentNote().body}
				onChange={updateNote}
				onTabChange={setSelectedTab}
				selectedTab={selectedTab}
				generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
				minEditorHeight={80}
				heightUnits="vh"/>
		</section>
	);
};

export default Editor;
