import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYjdiN2YyOWZlYzczOGFiMzk3Y2E1In0sImlhdCI6MTY5MzE1NDE3NX0.Ua4IjPCkkSqlcAzM9dFtRqHkNZ0O20VK5WyC56uw2rs",
      },
    });
    const json = await response.json();
    setNotes(json);
    console.log(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        authToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYjdiN2YyOWZlYzczOGFiMzk3Y2E1In0sImlhdCI6MTY5MzE1NDE3NX0.Ua4IjPCkkSqlcAzM9dFtRqHkNZ0O20VK5WyC56uw2rs",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    //code to add a note
    console.log("Adding a new note");
    const note = {
      _id: "61322f119553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a0664",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    console.log("Deleting node with id" + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        authToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlYjdiN2YyOWZlYzczOGFiMzk3Y2E1In0sImlhdCI6MTY5MzE1NDE3NX0.Ua4IjPCkkSqlcAzM9dFtRqHkNZ0O20VK5WyC56uw2rs",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
