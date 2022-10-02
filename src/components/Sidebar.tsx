import './Sidebar.css';
import { Note } from '../App';

const Sidebar = ({onAddNote, notes, onDeleteNote, setActiveNote, activeNote}: any): JSX.Element => {

  const sortedNotes = notes.sort((a :any, b: any) => b.modDate.getTime() - a.modDate.getTime())

  return (
    <div className='app-sidebar'>
      <div className='app-sidebar-header'>
        <h1>ノート</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note: Note) => {
          return (
            <div
              key={note.id}
              className={`app-sidebar-note ${note.id === activeNote && "active"}`}
              onClick={() => setActiveNote(note.id)}
            >
              <div className="sidebar-note-title">
                <strong>{ note.title }</strong>
                <button onClick={() => onDeleteNote(note.id)}>Del</button>
              </div>
                <p>{ note.content }</p>
                <small>{ note.modDate.toLocaleString('ja-JP') }</small>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar;
