import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

// Component
import CardMenu from "./CardMenu";

const NoteCard = ({
  note,
  dateFormat,
  onDeleteNotes,
  setArchived,
  setTitleArchivedButton,
  onShowModalNote,
  onSelectNote,
}) => {
  const [show, setShow] = useState(false);

  const onShowMenu = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="note-item">
      <div className="note-item__content">
        <div className="note-item__title-container">
          <h5 className="note-item__title">{note.title}</h5>
          <BsThreeDotsVertical
            className="note-item__menu-toggle"
            onClick={onShowMenu}
          />
          <CardMenu
            show={show}
            onShowMenu={onShowMenu}
            onDeleteNotes={onDeleteNotes}
            onArchive={setArchived}
            idNote={note.id}
            archiveStatus={note.archived}
          />
        </div>
        <p className="note-item__date">{dateFormat(note.createdAt)}</p>
        <div className="note-item__body">{note.body}</div>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__show-button"
          onClick={() => {
            onShowModalNote();
            onSelectNote(note.id);
          }}
        >
          Show
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
