import React from 'react';

const Note = ({ note, selectNote }) => {
  return (
    <div className="note" onClick={() => { selectNote(note.id) }}>
      <div className="star">{note.status == "Starred" ? "*" : ""}</div>
      <div className="note-title"><h3>{note.title}</h3></div>
      <div className="note-category"><h4>{note.category}</h4></div>
      <div className="note-desc">{note.tagline}</div>
    </div>
  )
}

export default Note;