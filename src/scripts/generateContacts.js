import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (quantity) => {
  try {
    const data = await readContacts();
    const startData = JSON.parse(data);
    console.log(startData);
    const newData = [];
    for (let i = 0; i <= quantity; i++) {
      const newContact = createFakeContact();
      newData.push(newContact);
    }
    const newDataArr = [...startData, ...newData];
    await writeContacts(JSON.stringify(newDataArr));
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(3);
