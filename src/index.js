import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NoteInput extends React.Component {
    render() {
        return (
            <div className="note-input">
                <input type="text" onKeyPress={ this.props.onKeyPress() } />
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
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

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

    renderNotes() {
        var out = [];
        for (let val of this.state.noteValues) {
            out.push(
                <Note className="note" value={val}/>
            );
        }
        return out;
    }

    handleKeyPress(event) {
        if (event.key === "Enter") {
            let value = event.target.value;
            this.setState(prevState => ({
                noteValues: [...prevState.noteValues, value]
            }));
        }
    }
}

ReactDOM.render(
    <Notes/>,
    document.getElementById('root')
);

