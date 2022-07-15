import React from "react";
import "./ListNotes.css";

// Component
import EmptyData from "../empty_data/EmptyData";
import NoteCard from "../cards/NoteCard";

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
          <NoteCard
            note={note}
            dateFormat={dateFormat}
            setArchived={onArchived}
            setTitleArchivedButton={"Archive"}
            onDeleteNotes={onDeleteNotes}
          />
        ))}
      </div>
    </div>
  );
};

export default ListNotes;
