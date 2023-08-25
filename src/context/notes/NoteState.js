import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "649569813b62765eace06820",
          "user": "6492c6a77d37dd4d15ccc8ce",
          "title": "new note UPDATED 99",
          "description": "Please access the playlist UPDATED 99",
          "tag": "youtube",
          "date": "2023-06-23T09:44:33.294Z",
          "__v": 0
        },
        {
          "_id": "649569b43b627265eace06822",
          "user": "6492c6a77d37dd4d15ccc8ce",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-06-23T09:45:24.919Z",
          "__v": 0
        },
        {
          "_id": "64956918123b62765eace06820",
          "user": "6492c6a77d37dd4d15ccc8ce",
          "title": "new note UPDATED 99",
          "description": "Please access the playlist UPDATED 99",
          "tag": "youtube",
          "date": "2023-06-23T09:44:33.294Z",
          "__v": 0
        },
        {
          "_id": "6495692b43b62765eace206822",
          "user": "6492c6a77d37dd4d15ccc8ce",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-06-23T09:45:24.919Z",
          "__v": 0
        },
        {
          "_id": "6495698153b62765eace062820",
          "user": "6492c6a77d37dd4d15ccc8ce",
          "title": "new note UPDATED 99",
          "description": "Please access the playlist UPDATED 99",
          "tag": "youtube",
          "date": "2023-06-23T09:44:33.294Z",
          "__v": 0
        }        
      ]

    
      const [notes,setNotes] = useState(notesInitial)

        // Add a Note
        const addNote = (title, description, tag)=>{
          // TODO: API Call
          console.log("Adding a new note")
          const note = {
            "_id": "61322f119553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          };
          setNotes(notes.concat(note)) 
        }
  
        // Delete a Note
        const deleteNote = (id)=>{
        console.log("Deleting node with id" + id);
        const newNote = notes.filter((note)=>{ return note._id!==id})
        setNotes(newNote) 
        }
        // Edit a Note
        const editNote = ()=>{
  
        }
    return(
        <noteContext.Provider value = {{notes, addNote,deleteNote,editNote}}>
            {props.children}
        </noteContext.Provider>
            
    )
}

export default NoteState;