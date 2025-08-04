import React from "react";


function Template({template, onDelete}){
    return <div className="note-container">
            <p className="note-title">{template.nomTemplate}</p>
            <p className="note-content">{template.content}</p>
            <p className="note-date">{}</p>
            <button className="delete-button" onClick={() => onDelete(template.id)}>
                Delete
            </button>
    </div>
}

export default Template;