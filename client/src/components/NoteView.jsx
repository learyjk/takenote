import React from 'react';

const NoteView = ({ note, handleStatus, handleEdit }) => {

  return (
    <div className="noteView">
      <div className="noteViewTitle" >
        <h1 data-id={note.id} onClick={handleEdit} data-field="title">{note.title}</h1>
      </div>
      <div className="noteViewCategory">
        <h3 data-id={note.id} onClick={handleEdit} data-field="category">{note.category}</h3>
      </div>
      <div className="noteViewTagline">
        <h4 data-id={note.id} onClick={handleEdit} data-field="tagline">{note.tagline}</h4>
      </div>
      <div className="noteViewNote">
        <p data-id={note.id} onClick={handleEdit} data-field="note">{note.note}</p>
      </div>
      <button name={note.status === "Hidden" ? "None" : "Hidden"} data-id={note.id} onClick={handleStatus}>{note.status === "Hidden" ? "Unhide Note" : "Hide Note"}</button>
      <button name={note.status === 'Starred' ? "None" : 'Starred'} data-id={note.id} onClick={handleStatus}>{note.status === 'Starred' ? "Unstar It" : "Star It!"}</button>
    </div>
  )
};

export default NoteView;
