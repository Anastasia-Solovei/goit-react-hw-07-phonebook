import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "contactList/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contactList/fetchContactsSuccess"
);
export const fetchContactsError = createAction(
  "contactList/fetchContactsError"
);

export const addContactRequest = createAction("contactList/addContactRequest");
export const addContactSuccess = createAction("contactList/addContactSuccess");
export const addContactError = createAction("contactList/addContactError");

export const deleteContactRequest = createAction(
  "contactList/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contactList/deleteContactSuccess"
);
export const deleteContactError = createAction(
  "contactList/deleteContactError"
);

export const changeFilter = createAction("contactList/changeFilter");
