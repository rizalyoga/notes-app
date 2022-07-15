import React from "react";
import "./ListNotes.css";

// Component
import EmptyData from "../empty_data/EmptyData";

const ListNotes = ({
  notes,
  searchTerm,
  dateFormat,
  onArchived,
  onDeleteNotes,
}) => {
  const dataNotes = notes.filter(
    (note) =>
      !note.archived &&
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="list-notes-container">
      <h3 className="component-title">Catatan Aktif</h3>
      {dataNotes.length < 1 && <EmptyData />}
      <div className="notes-list-container">
        {dataNotes.map((note) => (
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
                onClick={() => onArchived(note.id)}
              >
                Archive
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListNotes;
