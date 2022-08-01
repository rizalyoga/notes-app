import React from "react";
import "./ListNotes.css";

// Component
import EmptyData from "../empty_data/EmptyData";
import NoteCard from "../cards/NoteCard";

const ListArchive = ({
  notes,
  searchTerm,
  dateFormat,
  onUndoArchived,
  onDeleteNotes,
  onShowModalNote,
  onSelectNote,
}) => {
  const dataNotes = notes?.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="list-notes-container list-archive">
      <h3 className="component-title">Catatan Arsip</h3>
      {!dataNotes.length && <EmptyData />}
      <div className="notes-list-container">
        {dataNotes?.map((note) => (
          <NoteCard
            note={note}
            dateFormat={dateFormat}
            setArchived={onUndoArchived}
            setTitleArchivedButton={"UnArchive"}
            onDeleteNotes={onDeleteNotes}
            key={note.id}
            onShowModalNote={onShowModalNote}
            onSelectNote={onSelectNote}
          />
        ))}
      </div>
    </div>
  );
};

export default ListArchive;
