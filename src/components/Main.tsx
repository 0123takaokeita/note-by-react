import './Main.css'

const Main = ({activeNote}: any) => {
  if (activeNote === undefined) {
    return <div className='no-active-note'>note を選択してね</div>
  }

  return(
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea  placeholder='ノート内容を記入'></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{ activeNote.title  }</h1>
        <div className="markdown-preview">{ activeNote.content}</div>
      </div>
    </div>
  )
}

export default Main;
