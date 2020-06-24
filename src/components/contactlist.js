import React, { Component } from "react";

import * as ContactActions from "../actions/contactactions";
import ContactStore from "../stores/contactstore";
import { Contact } from "./contact";
import "./loading.css";

class ContactList extends Component {
    state = null;

    constructor(props) {
        super();
        this.getContacts = this.getContacts.bind(this);
    }

    componentWillMount() {
        ContactStore.on("CONTACTS_CHANGE", this.getContacts);
        this.reloadContacts();
        setInterval(() => {
            this.reloadContacts();
        }, 4000);
    }

    componentWillUnmount() {
        ContactStore.removeListener("CONTACTS_CHANGE", this.getContacts);
    }

    getContacts() {
        this.setState({
            contacts: ContactStore.getAll(),
        });
    }

    reloadContacts() {
        ContactActions.reloadContacts();
    }

    render() {
        if (!this.state) {
            return <div className="loading" />;
        }
        return (
            <div>
                <center>
                    <h1>Contact List</h1>
                </center>
                {this.state.contacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </div>
        );
    }
}
export default ContactList;
