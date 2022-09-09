const { listContacts, getContactById, addContact,removeContact } = require("./contacts");


(async () => {
    const contacts = await listContacts();
    console.table(contacts);
})();

getContactById("3");

removeContact("10");

addContact('Uliana', '3@gmail.com', '222-11-06');


