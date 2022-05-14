import React from 'react';
import Note from "./Note.jsx";

const Notes = ({ notes, selectNote }) => {

  return (
    <div>
      <h1>My Notes</h1>
      <div className="notes-list">
        {notes.map((note) => {
          return <Note key={note.id} note={note} selectNote={selectNote} />
        })}
      </div>
    </div>
  )
}

export default Notes;