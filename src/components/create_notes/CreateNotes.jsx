import React from "react";
import "./CreateNotes.css";

class CreateNotes extends React.Component {
  render() {
    return (
      <div className="notes-form-container">
        <h3>Buat Catatan</h3>
        <form>
          <input type="text" placeholder="Ini adalah judul..." />
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
