import { useState } from "react"

export default function Sidebar(props) {
  const notesData = props.data
  
  return (
    <aside>
      <div className="sidebar-head">
        <span className="h2">My Notes</span>
        <button className="btn-add-new">+</button>
      </div>
      <div className="sidebar-list-wrapper">
        <ul className="sidebar-list">

          {/* Map through each notes data */}

          {notesData.map((note) => {
            return(
              <li 
                key={`notes-${note.id}`} 
                className={`sidebar-list-item ${note.id - 1 === props.currentNote && 'list-item-active'}`} 
                onClick={() => {props.handleClick(note)}}
              >
                <span className="txt-thumbs-title">{`${note.title}`}</span>
                <p className="txt-thumbs">{note.content.substring(0, 150)}{note.content.length > 150 && '...'}</p>
                <span className="txt-thumbs-date">{note.date}</span>
              </li>
            )
          })}
          
        </ul>
      </div>
    </aside>
  )
}