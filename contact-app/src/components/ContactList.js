import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
 const htmlcode = props.contactList.map((contact)=>{

  return(
    <ContactCard keycontact = {contact} />
  )
 })
  return <div className="ui called list">{htmlcode}</div>;
};

export default ContactList;
