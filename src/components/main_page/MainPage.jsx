import React from "react";

// Component
import Navbar from "../navbar/Navbar";
import CreateNotes from "../create_notes/CreateNotes";
import ListNotes from "../list_notes/ListNotes";
import ListArchive from "../list_notes/ListArchive";
import ModalNotes from "../modal_notes/ModalNotes";

// Icon
import { IoIosAddCircle } from "react-icons/io";

// Data
import { showFormattedDate } from "../../utils/index";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      searchTerm: "",
      isShowForm: false,
      isShowModal: false,
      selectedNote: {},
    };

    // Bind function
    this.onDeleteNotes = this.onDeleteNotes.bind(this);
    this.onSearchNotes = this.onSearchNotes.bind(this);
    this.onArchived = this.onArchived.bind(this);
    this.onUndoArchived = this.onUndoArchived.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.onUpdateData = this.onUpdateData.bind(this);
    this.onShowCreateForm = this.onShowCreateForm.bind(this);
    this.onShowModalNote = this.onShowModalNote.bind(this);
    this.onSelectNote = this.onSelectNote.bind(this);
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
    this.onShowCreateForm();
  }

  // Function for show Form
  onShowCreateForm() {
    this.setState((prevState) => {
      return {
        isShowForm: !prevState.isShowForm,
      };
    });
  }

  // Function for show modal detail note
  onShowModalNote() {
    this.setState((prevState) => {
      return {
        isShowModal: !prevState.isShowModal,
      };
    });
  }

  // Function for show modal detail note
  onSelectNote(id) {
    this.setState(() => {
      const dataNoteSelected = this.state.notes.filter(
        (note) => note.id === id
      );

      return {
        selectedNote: dataNoteSelected,
      };
    });
  }

  render() {
    return (
      <>
        {this.state.isShowModal && (
          <ModalNotes
            setIsOpen={this.onShowModalNote}
            selectedNote={this.state.selectedNote}
          />
        )}
        <Navbar onSearchNotes={this.onSearchNotes} />
        <div className="create-note__button">
          <button onClick={this.onShowCreateForm}>
            Create Notes <IoIosAddCircle className="create-note__add-icon" />
          </button>
        </div>
        <CreateNotes
          onAddNote={this.onAddNote}
          isShowForm={this.state.isShowForm}
        />
        <ListNotes
          notes={this.state.notes}
          searchTerm={this.state.searchTerm}
          dateFormat={showFormattedDate}
          onArchived={this.onArchived}
          onDeleteNotes={this.onDeleteNotes}
          onShowModalNote={this.onShowModalNote}
          onSelectNote={this.onSelectNote}
        />
        <ListArchive
          notes={this.state.notes}
          searchTerm={this.state.searchTerm}
          dateFormat={showFormattedDate}
          onUndoArchived={this.onUndoArchived}
          onDeleteNotes={this.onDeleteNotes}
          onShowModalNote={this.onShowModalNote}
          onSelectNote={this.onSelectNote}
        />
      </>
    );
  }
}

export default MainPage;
