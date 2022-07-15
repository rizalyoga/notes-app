import React from "react";
import "./ListNotes.css";

// Component
import EmptyData from "../empty_data/EmptyData";

class ListArchive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFormat: props.dateFormat,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  // Function for delete note
  onDeleteHandler(id) {
    const newData = this.props.notes.filter((note) => note.id !== id);
    this.setState(() => {
      return {
        notes: newData,
      };
    });
  }

  render() {
    const dataNotes = this.props.notes.filter(
      (note) =>
        note.archived &&
        note.title.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    );

    return (
      <div className="list-notes-container">
        <h3 className="component-title">Catatan Arsip</h3>
        {dataNotes.length < 1 && <EmptyData />}
        <div className="notes-list-container">
          {dataNotes.map((note) => (
            <div className="note-item" key={note.id}>
              <div className="note-item__content">
                <h5 className="note-item__title">{note.title}</h5>
                <p className="note-item__date">
                  {this.state.dateFormat(note.createdAt)}
                </p>
                <div className="note-item__body">
                  <p>{note.body}</p>
                </div>
              </div>
              <div className="note-item__action">
                <button
                  className="note-item__delete-button"
                  onClick={() => this.onDeleteHandler(note.id)}
                >
                  Delete
                </button>
                <button
                  className="note-item__archive-button"
                  onClick={() => this.props.onUndoArchived(note.id)}
                >
                  UnArchive
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListArchive;
