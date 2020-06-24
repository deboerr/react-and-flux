import axios from "axios";
import config from "../config";

class ContactService {
    getAllContacts() {
        const apiUrl = config.typicode.BASE + "/users";
        return axios.get(apiUrl);
    }
}

export default new ContactService();
