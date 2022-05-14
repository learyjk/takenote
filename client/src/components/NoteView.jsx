import React from 'react';

const NoteView = ({ note, handleStatus }) => {

  return (
    <div className="noteView">
      <div className="noteViewTitle">
        <h1>{note.title}</h1>
      </div>
      <div className="noteViewCategory">
        <h3>{note.category}</h3>
      </div>
      <div className="noteViewTagline">
        <h4>{note.tagline}</h4>
      </div>
      <div className="noteViewNote">
        <p>{note.note}</p>
      </div>
      <button name={note.status === "hide" ? "" : "hide"} data-id={note.id} onClick={handleStatus}>{note.status === "hide" ? "Unhide Note" : "Hide Note"}</button>
      <button name={note.status === "star" ? "" : "star"} data-id={note.id} onClick={handleStatus}>{note.status === "star" ? "Unstar It" : "Star It!"}</button>
    </div>
  )
};

export default NoteView;
