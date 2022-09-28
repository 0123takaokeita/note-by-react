import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useState } from 'react';
import uuid from 'react-uuid';

export type Note = {
    id: string ,
    title: string,
    content: string,
    modDate: string,
}

function App() {
  const [notes, setNote] = useState<Note[]>([])

  const onAddNote = (): void => {
    const newNote: Note = {
      id: uuid(),
      title: 'new note',
      content: 'new note content',
      modDate: new Date().toLocaleString('ja-JP'),
    }

    setNote([...notes, newNote])
  }

  const onDeleteNote = (id: string): void => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNote(filterNotes)
  }

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
      />
      <Main />
    </div>
  )
}

export default App
