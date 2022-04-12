import styled from "styled-components";

export const CreateNotePage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`

export const FirstNote = styled.button`
  cursor: pointer;
  background-color: #4A4E74;
  border: none;
  color: white;
  border-radius: 3px;
  padding: 1rem;
`

export const PaneEditor = styled.section`

`
export const PaneSideBar = styled.section`

`

export const BarHeader = styled.div`

`
export const NewNoteBtn = styled.button`

`

export const NoteElementContainer = styled.div`

`

export const NoteElementTitle = styled.div<SelectedNoteProp>`
  background-color: ${({selectedNote})=> selectedNote? '#4A4E74': ''};
`

export const TextSnippet = styled.h4`

`