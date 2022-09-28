import './Sidebar.css';
import { Note } from '../App';

const Sidebar = ({onAddNote, notes, onDeleteNote}: any): JSX.Element => {
  return (
    <div className='app-sidebar'>
      <div className='app-sidebar-header'>
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note: Note) => {
          return (
            <div key={note.id} className="app-sidebar-note">
              <div className="sidebar-note-title">
                <strong>{ note.title }</strong>
                <button onClick={() => onDeleteNote(note.id)}>削除</button>
              </div>
                <p>{ note.content }</p>
                <small>{ note.modDate }</small>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar;
