import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NoteInput extends React.Component {
    render() {
        return (
            <div className="note-input">
                <input type="text" onKeyPress={this.props.onKeyPress()}/>
            </div>
         );
    }
}

function Note(props) {
    return (
        <p className="note">{props.value}</p>
    );
}

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteValues: []
        };
    }

    render() {
        return (
            <div className="notes">
                {this.renderNotes()}
            </div>
        );
    }

    renderNotes() {
        var out = [];
        for (let val of this.state.noteValues) {
            out.push(
                <Note value={val}/>
            );
        }
        return out;
    }
}

class NotesApp extends React.Component {
    render() {
        return (
            <div className="notes-wrapper">
                <NoteInput
                    onKeyPress={(event) => this.handleKeyPress}
                />
                <Notes/>
            </div>
        );
    }

    handleKeyPress(event) {
        if (event.key == "Enter") {
            alert("submitted");
        }
    }
}

ReactDOM.render(
    <NotesApp />,
    document.getElementById('root')
);

