import styled from 'styled-components';

export const CreateNewNotes = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`

export const NewNoteButton = styled.div`
  cursor: pointer;
  background-color: var(--bluegrey);
  border: none;
  color: white;
  border-radius: 3px;
  padding: 1rem;
  margin-top: 50px;
`

export const PaneEditor = styled.section`
  overflow-y: auto;
  width: 80%;
  height: 100vh;
  padding: 20px;
  font-size: 20px;
`

export const PaneSideBar = styled.section`
  overflow-y: auto;
  width: 20%;
`

export const SideBarHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  margin: 15px 0;

  h3 {
    font-size: 1.75rem;
  }
`

export const SideBarNewNoteButton = styled.button`
  cursor: pointer;
  background-color: var(--bluegrey);
  border: none;
  color: white;
  border-radius: 3px;
  height: 30px;
  width: 30px;
`
