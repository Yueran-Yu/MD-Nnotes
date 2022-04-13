import React, {FC, useState} from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'

const Editor: FC<EditorProps> = ({currentNote, updateNote}) => {
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
				value={currentNote.body}
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
