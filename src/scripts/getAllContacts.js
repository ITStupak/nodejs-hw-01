import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
        const data = await readContacts();
        JSON.parse(data);
    } catch (error) {
        console.log(error.message);
    }
};

console.log(await getAllContacts());
