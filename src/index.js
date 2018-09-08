import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NoteInput extends React.Component {
    render() {
        return (
            <div className="note-input-wrapper">
                <input type="text" className="note-input" autofocus="autofocus"
                    onKeyPress={ this.props.onKeyPress() } />
            </div>
         );
    }
}

// Functional component that renders a single note
function Note(props) {
    return (
        <div className="note">{props.value}</div>
    );
}

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // State to keep track of notes added by user
            noteValues: []
        };
        // Bind this to handleKeyPress so that this.state can be accessed
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // Render the Notes root component
    render() {
        return (
            <div className="notes-wrapper">
                <NoteInput
                    onKeyPress={ (event) => this.handleKeyPress } />
                <div className="notes">
                    {this.renderNotes()}
                </div>
            </div>
        );
    }

    // Renders every note from this.state.noteValues
    renderNotes() {
        var out = [];
        for (let val of this.state.noteValues) {
            out.push(
                <Note className="note" value={val}/>
            );
        }
        return out;
    }

    // Handles key events from the notes input box
    handleKeyPress(event) {
        if (event.key === "Enter") { // When user submits
            let value = event.target.value;
            event.target.value = ""; // Clear input box
            // Update state by pushing value onto array of notes
            this.setState(prevState => ({
                noteValues: [...prevState.noteValues, value]
            }));
        }
    }
}

// Render root component in DOM
ReactDOM.render(
    <Notes/>,
    document.getElementById('root')
);

