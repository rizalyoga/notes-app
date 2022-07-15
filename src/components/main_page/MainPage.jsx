import React from "react";

// Component
import Navbar from "../navbar/Navbar";
import CreateNotes from "../create_notes/CreateNotes";
import ListNotes from "../list_notes/ListNotes";
import ListArchive from "../list_notes/ListArchive";

// Data
import { getInitialData, showFormattedDate } from "../../utils/index";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchTerm: "",
    };

    // Bind function
    this.onSearchNotes = this.onSearchNotes.bind(this);
    this.onArchived = this.onArchived.bind(this);
    this.onUndoArchived = this.onUndoArchived.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
  }

  // Funtion for set Archived note
  onArchived(id) {
    let newData = [];

    this.state.notes.forEach((note) => {
      if (note.id === id) {
        note.archived = true;
      }
      newData.push(note);
    });

    this.setState({
      notes: newData,
    });
  }

  // Funtion for set unArchived note
  onUndoArchived(id) {
    let newData = [];

    this.state.notes.forEach((note) => {
      if (note.id === id) {
        note.archived = false;
      }
      newData.push(note);
    });

    this.setState({
      notes: newData,
    });
  }

  // Funtion for set word of title note
  onSearchNotes(term) {
    this.setState(() => {
      return {
        searchTerm: term,
      };
    });
  }

  // Function for add Note
  onAddNote(titleNote, bodyNote) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: titleNote,
            body: bodyNote,
            archived: false,
            createdAt: new Date().toString(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <Navbar onSearchNotes={this.onSearchNotes} />
        <CreateNotes onAddNote={this.onAddNote} />
        <ListNotes
          notes={this.state.notes}
          searchTerm={this.state.searchTerm}
          dateFormat={showFormattedDate}
          onArchived={this.onArchived}
        />
        <ListArchive
          notes={this.state.notes}
          searchTerm={this.state.searchTerm}
          dateFormat={showFormattedDate}
          onUndoArchived={this.onUndoArchived}
        />
      </>
    );
  }
}

export default MainPage;
