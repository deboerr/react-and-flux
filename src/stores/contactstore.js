import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ContactStore extends EventEmitter {
    constructor() {
        super();
        this.Contacts = null;
    }

    createContact(text) {
        const id = Date.now();
        this.Contacts.push({
            id,
            text,
            complete: false,
        });
    }

    getAll() {
        return this.Contacts;
    }

    handleActions(action) {
        switch (action.type) {
            case "CREATE_CONTACT": {
                this.createContact(action.text);
                this.emit("CONTACTS_CHANGE");
                break;
            }
            case "RECEIVE_CONTACTS": {
                this.Contacts = action.contacts;
                this.emit("CONTACTS_CHANGE");
                break;
            }
            default: {
                break;
            }
        }
    }
}

const contactStore = new ContactStore();
dispatcher.register(contactStore.handleActions.bind(contactStore));

export default contactStore;
