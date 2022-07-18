import React from "react";

// Component
import Navbar from "../navbar/Navbar";
import CreateNotes from "../create_notes/CreateNotes";
import ListNotes from "../list_notes/ListNotes";
import ListArchive from "../list_notes/ListArchive";

// Data
import { showFormattedDate } from "../../utils/index";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      searchTerm: "",
    };

    // Bind function
    this.onDeleteNotes = this.onDeleteNotes.bind(this);
    this.onSearchNotes = this.onSearchNotes.bind(this);
    this.onArchived = this.onArchived.bind(this);
    this.onUndoArchived = this.onUndoArchived.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.onUpdateData = this.onUpdateData.bind(this);
  }

  componentDidMount() {
    const notesData = localStorage.getItem("notesData");

    this.setState(() => {
      if (notesData != null) {
        return {
          notes: JSON.parse(notesData),
        };
      } else {
        return {
          notes: [],
        };
      }
    });
  }

  // UpdateData for every action
  onUpdateData() {
    const updateData = JSON.parse(localStorage.getItem("notesData"));

    this.setState(() => {
      return {
        notes: updateData,
      };
    });
  }

  // Funtion for set Archived note
  onDeleteNotes(id) {
    const dataFromStorage = JSON.parse(localStorage.getItem("notesData"));
    const newData = dataFromStorage.filter((note) => note.id !== id);

    localStorage.setItem("notesData", JSON.stringify(newData));

    this.onUpdateData();
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

    localStorage.setItem("notesData", JSON.stringify(newData));
    this.onUpdateData();
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

    localStorage.setItem("notesData", JSON.stringify(newData));
    this.onUpdateData();
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
    let notesData = this.state.notes;

    const newData = {
      id: +new Date(),
      title: titleNote,
      body: bodyNote,
      archived: false,
      createdAt: new Date().toString(),
    };

    notesData.push(newData);

    localStorage.setItem("notesData", JSON.stringify(notesData));
    this.onUpdateData();

    // save data just in memmory
    // this.setState((prevState) => {
    //   return {
    //     notes: [
    //       ...prevState.notes,
    //       {
    //         id: +new Date(),
    //         title: titleNote,
    //         body: bodyNote,
    //         archived: false,
    //         createdAt: new Date().toString(),
    //       },
    //     ],
    //   };
    // });
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
          onDeleteNotes={this.onDeleteNotes}
        />
        <ListArchive
          notes={this.state.notes}
          searchTerm={this.state.searchTerm}
          dateFormat={showFormattedDate}
          onUndoArchived={this.onUndoArchived}
          onDeleteNotes={this.onDeleteNotes}
        />
      </>
    );
  }
}

export default MainPage;
