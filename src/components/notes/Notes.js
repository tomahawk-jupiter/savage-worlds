import React, { useState } from "react";
import { connect } from "react-redux";
import "./notes.css";

const Notes = ({ notes, addNote, removeNote }) => {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");

  const handleToggleInput = () => {
    setShowInput(!showInput);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddNote = (e) => {
    addNote(text);
    setText("");
    setShowInput(false);
  };

  const handleRemoveNote = (e) => {
    removeNote(e.target.id);
  };

  return (
    <div className="notesPanel">
      <div className="componentTitle">
        Notes
        <sup onClick={handleToggleInput} className="editBtn">
          {showInput ? "Cancel" : "Add"}
        </sup>
      </div>
      {showInput && (
        <div className="newNoteInputGroup">
          <textarea
            autoFocus
            onFocus={(e) => {
              e.target.selectionStart = e.target.selectionEnd =
                e.target.value.length;
            }}
            onChange={handleChange}
            value={text}
          ></textarea>
          <button onClick={handleAddNote} className="newNoteBtn">
            Ok
          </button>
        </div>
      )}
      <div className="notesList">
        {notes.map((note, index) => {
          return (
            <div
              id={index}
              key={index}
              className="noteEntry"
              onClick={handleRemoveNote}
            >
              {note}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch({ type: "ADD_NOTE", note }),
    removeNote: (index) => dispatch({ type: "REMOVE_NOTE", index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
