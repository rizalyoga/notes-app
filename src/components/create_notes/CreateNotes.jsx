import React from "react";
import "./CreateNotes.css";

class CreateNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      charLimit: 50,
    };

    // Bind Function
    this.titleOnChange = this.titleOnChange.bind(this);
    this.bodyOnChange = this.bodyOnChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onAlert = this.onAlert.bind(this);
  }

  // Handler for set title state when title field changes
  titleOnChange(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  // Handler for set body state when body field changes
  bodyOnChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  // Submit Handler
  onSubmitHandler(e) {
    e.preventDefault();

    this.props.onAddNote(this.state.title, this.state.body);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  // Funtion for show alert when character limit in title field pass
  onAlert() {
    window.alert("Oops.. Karakter melebihi batas. Silahkan mengisi ulang.");
    this.setState(() => {
      return {
        title: "",
      };
    });
  }

  render() {
    if (this.state.charLimit - this.state.title.length <= 0) {
      this.onAlert();
    }

    return (
      <div
        className={
          this.props.isShowForm
            ? "notes-form-container active"
            : "notes-form-container"
        }
      >
        <div className="header-form">
          <h3 className="component-title">Buat Catatan</h3>
          <p>
            Sisa Karakter : {this.state.charLimit - this.state.title.length}
          </p>
        </div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="Ini adalah judul..."
            value={this.state.title}
            onChange={this.titleOnChange}
            required
          />
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="10"
            placeholder="Tuliskan catatanya disini..."
            value={this.state.body}
            onChange={this.bodyOnChange}
            required
          />
          <input className="submit-button" type="submit" value="Buat Catatan" />
        </form>
      </div>
    );
  }
}

export default CreateNotes;
