import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

export type Note = {
    id: string ,
    title: string,
    content: string,
    modDate: Date,
}

function App() {
  const defNote = JSON.parse(localStorage.getItem('notes') || '')
  const [notes, setNote] = useState<Note[]>(defNote || [])
  const [activeNote, setActiveNote] = useState('')

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  /**
   * 先頭の note を選択状態で表示する。
   */
  useEffect(() => {
    setActiveNote(notes[0]?.id)
  }, [])

  const onAddNote = (): void => {
    const newNote: Note = {
      id: uuid(),
      title: '',
      content: '',
      modDate: new Date(),
    }

    setNote([...notes, newNote])
  }

  const onDeleteNote = (id: string): void => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNote(filterNotes)
  }

  const getActiveNote = (): (Note | undefined) => {
    return notes.find((note: Note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote: any)  => {
    const updatedNotes = notes.map((note) => {
      return (note.id === updatedNote.id) ?  updatedNote :  note
    })
    setNote(updatedNotes)
  }

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        activeNote={ activeNote }
        onAddNote={ onAddNote }
        onDeleteNote={ onDeleteNote}
        setActiveNote={ setActiveNote }
      />
      <Main
      activeNote={ getActiveNote() }
      onUpdateNote={ onUpdateNote }/>
    </div>
  )
}

export default App
