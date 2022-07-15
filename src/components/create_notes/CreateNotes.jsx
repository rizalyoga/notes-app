import React from "react";
import "./CreateNotes.css";

class CreateNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      charLimit: 20,
    };

    this.titleOnChange = this.titleOnChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onAlert = this.onAlert.bind(this);
  }

  titleOnChange(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    console.log("ini hasilsubmit :", this.state.title);
  }

  onAlert() {
    window.alert(
      "Oops.. Karakter melebihi batas, Input Title terdisable. Silahkan reload web untuk memulai kembali."
    );
  }

  render() {
    if (this.state.charLimit - this.state.title.length <= 0) {
      this.onAlert();
    }
    return (
      <div className="notes-form-container">
        <div className="header-form">
          <h3>Buat Catatan</h3>
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
            disabled={
              this.state.charLimit - this.state.title.length <= 0 ? true : false
            }
          />
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="10"
            placeholder="Tuliskan catatanya disini..."
          />
          <input className="submit-button" type="submit" value="Buat" />
        </form>
      </div>
    );
  }
}

export default CreateNotes;
