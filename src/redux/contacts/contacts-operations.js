import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:4040";

export const fetchContacts = createAsyncThunk(
  "contactList/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get("/contacts");
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contactList/addContact",
  async (item) => {
    const contact = await axios.post("/contacts", item);
    return contact.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contactList/deleteContact",
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);
