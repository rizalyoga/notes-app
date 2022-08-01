import React from "react";
import "./CardMenu.css";

const CardMenu = ({
  show,
  onShowMenu,
  onDeleteNotes,
  onArchive,
  idNote,
  archiveStatus,
}) => {
  // set show menu and set return class
  const showMenu = () => {
    if (show) {
      return "note-item_card-menu note-item_menu_onshow";
    }

    return "note-item_card-menu";
  };

  const onDelete = () => {
    onDeleteNotes(idNote);
    onShowMenu();
  };

  const onArchived = () => {
    onArchive(idNote);
    onShowMenu();
  };

  // const onEdit = () => {
  //   onShowMenu();
  // };

  return (
    <div className={showMenu()}>
      <ul>
        <li onClick={onArchived}>{archiveStatus ? "UnArchive" : "Archive"}</li>
        {/* <li onClick={onEdit}>Edit</li> */}
        <li onClick={onDelete}>Delete</li>
      </ul>
    </div>
  );
};

export default CardMenu;
