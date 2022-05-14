import React from 'react';
import Note from "./Note.jsx";
import Search from './Search.jsx';

const Notes = ({ notes, selectNote, handleSearch, searchTerm }) => {

  return (
    <div>
      <h1>My Notes</h1>
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <div className="notes-list">
        {notes.map((note) => {
          return <Note key={note.id} note={note} selectNote={selectNote} />
        })}
      </div>
    </div>
  )
}

export default Notes;