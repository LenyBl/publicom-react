import axios from "axios";

const API_URL = "http://localhost:3001/api/";

export async function getAllMessages() {
    try {
        const messages = await axios.get(API_URL + "messages");
        return messages.data;
    } catch (error) {
        throw new Error("Error fetching messages");
    }
}

export async function addMessage(message) {
    try {
        await axios.post(API_URL + "add-message", message);
    } catch (error) {
        throw new Error("Error adding message");
    }
}