import React from "react";

const ContactCard = (props) => {
  return (
    <div
      className="item"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="content">
        <img className="ui avatar image" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1733812816~exp=1733816416~hmac=4ee956b0738fbe7a778a9ba2c92560e9ed760bf38b71af0cc0c5e8114f05c681&w=740"></img>
        <div className="header">{props.keycontact.name}</div>
        <div>{props.keycontact.phoneNo}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          display: "flex",
          justifyContent: "space-between",
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
