import React from "react";
import "./ListNotes.css";

class ListNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes,
      dateFormat: props.dateFormat,
    };
  }

  onArchivedNotes(id) {
    console.log(id);
  }

  render() {
    const dataNotes = this.state.notes.filter((note) => !note.archived);
    return (
      <div className="list-notes-container">
        <h3>Catatan Aktif</h3>
        <div className="notes-list-container">
          {dataNotes
            .filter((note) =>
              note.title
                .toLowerCase()
                .includes(this.props.searchTerm.toLowerCase())
            )
            .map((note, idx) => (
              <div className="note-item" key={idx}>
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
                  <button className="note-item__delete-button">Delete</button>
                  <button
                    className="note-item__archive-button"
                    onClick={() => this.props.onArchived(note.id)}
                  >
                    Archive
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ListNotes;
