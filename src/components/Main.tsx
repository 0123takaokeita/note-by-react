import './Main.css'
import ReactMarkdown from 'react-markdown'

const Main = ({activeNote, onUpdateNote}: any) => {
  const onEditNote = (key: any, value: any) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: new Date()
    })
  }

  if (activeNote === undefined) {
    return <div className='no-active-note'>note を選択してね</div>
  }

  return(
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id='title'
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote('title', e.target.value)}
        />
        <textarea
          id='content'
          placeholder='ノート内容を記入'
          value={activeNote.content}
          onChange={(e) => onEditNote('content', e.target.value)}>
        </textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{ activeNote.title  }</h1>
        <ReactMarkdown className="markdown-preview">{ activeNote.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Main;
