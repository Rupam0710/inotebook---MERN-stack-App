import noteContext from "./noteContext";
import { useState} from "react";

const NoteState = (props)=>{
    const s1 = {
        "name" : "rupam",
        "class" : "10a"

    }
    const [state,setState] = useState(s1)
    const update = ()=>{
        setTimeout(() => {
            setState({
            "name" : "Hulk",
            "class" : "10a"
        })
        }, 1000);
    }
    return(
        <noteContext.Provider value = {{state,update}}>
            {props.children}
        </noteContext.Provider>
            
    )
}

export default NoteState;