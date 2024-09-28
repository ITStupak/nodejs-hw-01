import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
        await fs.readFile(PATH_DB, { encoding: 'utf8', });
    } catch (error) {
        console.error(error);
    }
};
