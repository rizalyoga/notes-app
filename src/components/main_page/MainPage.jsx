import React from "react";

// component
import Navbar from "../navbar/Navbar";
import CreateNotes from "../create_notes/CreateNotes";
import ListNotes from "../list_notes/ListNotes";
import ListArchive from "../list_notes/ListArchive";

// data
import { getInitialData, showFormattedDate } from "../../utils/index";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchTerm: "",
    };

    this.onSearchNotes = this.onSearchNotes.bind(this);
    this.onArchived = this.onArchived.bind(this);
    this.onUndoArchived = this.onUndoArchived.bind(this);
  }

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

  onSearchNotes(term) {
    this.setState(() => {
      return {
        searchTerm: term,
      };
    });
  }

  render() {
    return (
      <>
        <Navbar onSearchNotes={this.onSearchNotes} />
        <CreateNotes />
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
