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
          "_id": "649569b43b62765eace06822",
          "user": "6492c6a77d37dd4d15ccc8ce",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-06-23T09:45:24.919Z",
          "__v": 0
        }
      ]
    
      const [notes,setNotes] = useState(notesInitial)
    return(
        <noteContext.Provider value = {{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
            
    )
}

export default NoteState;