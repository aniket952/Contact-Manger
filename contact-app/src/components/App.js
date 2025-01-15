import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const ContactListHolder = [
    {
      id:1,
      "name":"aniket",
      "phoneNo":"7517339323"
    },
    {
      id:2,
      "name":"yash",
      "phoneNo":"7517339323"
    },
    {
      id:3,
      "name":"mukesh",
      "phoneNo":"7517339323"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList  contactList={ContactListHolder}/>
    </div>
  );
}

export default App;
