import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NoteInput extends React.Component {
  render() {
    return (
      <div className="note-input">
        <input type="text"/>
      </div>
    );
  }
}

class Note extends React.Component {
  render() {
    return (
      <p className="note">{this.props.value}</p>
    );
  }
}

class Notes extends React.Component {
  renderNote(i) {
    return <Note value={i}/>;
  }

  render() {
    return (
      <div className="notes">
        {this.renderNote(0)}
      </div>
    );
  }
}

class NotesApp extends React.Component {
  render() {
    return (
      <div className="notes-wrapper">
        <NoteInput />
        <Notes/>
      </div>
    );
  }
}

ReactDOM.render(
  <NotesApp />,
  document.getElementById('root')
);

