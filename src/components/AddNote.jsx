import {useState} from 'react';

const AddNote = ({handleAddNote}) =>
{
    const [noteText, setNoteText] = useState('');
    const handleChange=(event)=>
    {
        setNoteText(event.target.value)
    }; 
    const handleSaveClick=()=>
    {
        if(noteText.trim().length > 0)
        {
            handleAddNote(noteText)
            setNoteText('')
        }
    };
    return(
        <div className="note new">
            <textarea rows="8" cols="10"
            placeholder="Start typing to add a new note"
            value={noteText}
            onChange={handleChange}
            >
            </textarea>
            <div className="note-footer"> 
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;