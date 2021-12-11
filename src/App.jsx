import React, { Component } from "react";
import s from "./App.module.css";
import { v4 } from "uuid";
import "./App.module.css";
import ContactsForm from "./components/ContactsForm";
import Contacts from "./components/Contacts";
import FilterField from "./components/FilterField";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addNewContact = ({ name, number }) => {
    const contact = {
      id: v4(),
      name: name,
      number: number,
    };

    const contactsNames = this.state.contacts.map((item) =>
      item.name.toLowerCase()
    );

    contactsNames.includes(contact.name.toLowerCase())
      ? alert(`${contact.name} is already in contacts.`)
      : this.setState((prevState) => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const NormalizeFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(NormalizeFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");

    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }

    console.log(parsedContacts);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log("Update done");

      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className={s.app}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactsForm addNewContact={this.addNewContact} />
        <h2 className={s.title}>Contacts</h2>
        <FilterField value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contactsArr={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
