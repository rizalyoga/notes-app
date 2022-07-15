import React from "react";

const NoteCard = ({
  note,
  dateFormat,
  onDeleteNotes,
  setArchived,
  setTitleArchivedButton,
}) => {
  return (
    <div className="note-item" key={note.id}>
      <div className="note-item__content">
        <h5 className="note-item__title">{note.title}</h5>
        <p className="note-item__date">{dateFormat(note.createdAt)}</p>
        <div className="note-item__body">
          <p>{note.body}</p>
        </div>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDeleteNotes(note.id)}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => setArchived(note.id)}
        >
          {setTitleArchivedButton}
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
