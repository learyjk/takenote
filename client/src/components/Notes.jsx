import React from 'react';
import Note from "./Note.jsx";

const Notes = ({ notes }) => {

  return (
    <div>
      <h1>My Notes</h1>
      <div className="notes-list">
        {notes.map((note) => {
          return <Note key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}

export default Notes;