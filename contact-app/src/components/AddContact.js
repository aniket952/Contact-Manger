import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name"></input>
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="Number"
              name="phoneNumber"
              placeholder="phoneNumber"
            ></input>
          </div>
          <button type="submit" className="ui button blue">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
