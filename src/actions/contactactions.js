import dispatcher from "../dispatcher";
import contactService from "../services/contactservice";

export function createContact(text) {
    dispatcher.dispatch({
        type: "CREATE_CONTACT",
        text,
    });
}

export function deleteContact(id) {
    dispatcher.dispatch({
        type: "DELETE_CONTACT",
        id,
    });
}

function fetchContacts() {
    dispatcher.dispatch({ type: "FETCH_CONTACTS" });
    return contactService.getAllContacts();
}

export function reloadContacts() {
    fetchContacts().then((resp) => {
        resp.data[0].name = new Date().toLocaleTimeString();
        dispatcher.dispatch({
            type: "RECEIVE_CONTACTS",
            contacts: resp.data,
        });
    });
}
