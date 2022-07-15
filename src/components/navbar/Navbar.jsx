import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };

    this.onChangeHanlder = this.onChangeHanlder.bind(this);
  }

  onChangeHanlder(event) {
    this.setState(() => {
      return {
        term: event.target.value,
      };
    });

    this.props.onSearchNotes(this.state.term);
  }

  render() {
    return (
      <>
        <div className="navbar-container">
          <div className="logo-container">
            <h1>Notes APP</h1>
          </div>
          <div className="search-container">
            <form>
              <input
                type="text"
                placeholder="Cari catatan..."
                value={this.state.term}
                onChange={this.onChangeHanlder}
              />
            </form>
          </div>
        </div>
        <div className="underline"></div>
      </>
    );
  }
}

export default Navbar;
