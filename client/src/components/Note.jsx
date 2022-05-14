import React from 'react';

const Note = ({ note }) => {
  return (
    <div className="note">
      <div className="note-title"><h3>{note.title}</h3></div>
      <div className="note-category"><h4>{note.category}</h4></div>
      <div className="note-desc">{note.note}</div>
    </div>
  )
}

export default Note;