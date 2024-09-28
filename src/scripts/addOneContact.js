import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    try {
        const data = await readContacts();
        const startData = JSON.parse(data);
        const newContact = createFakeContact();
        const newDataArr = [...startData, newContact];
        await writeContacts(JSON.stringify(newDataArr));

    } catch (error) {
        console.error(error);
    }
 };

addOneContact();
