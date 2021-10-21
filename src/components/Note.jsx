//import {MdDeleteForever} from 'react-icons/md'
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const Note=({id, text, date, handleDeleteNote})=>
{
    return(
        <div className="note">
            <span>
                {text}
            </span>
            <div v className="note-footer">
                <small id="date">
                    {date}
                </small>
                <IconButton disableElevation disableRipple onClick={()=>handleDeleteNote(id)}>
                    <DeleteIcon id="delete"/>
                </IconButton>
            </div>
        </div>
    )
}

export default Note;