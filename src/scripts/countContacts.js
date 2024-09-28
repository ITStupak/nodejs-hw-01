import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const data = await readContacts();
        JSON.parse(data).length;
    } catch (error) {
        console.error(error);
    }
};

console.log(await countContacts());
