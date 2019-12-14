import React, { Component } from 'react'
import * as firebase from 'firebase'

class Notes extends Component {
    constructor(props) {
        super(props)
    }

    removeHandler(id) {
        firebase.database().ref('notes').child(id).remove();
    }

    updateHandler(event, id) {
        firebase.database().ref('notes').child(id).update({note : event.target.value});
    }


    render() {
        return (
            <div>
                <section className="notes-wrapper">
                    <h3>Notes (Click on the text to edit)</h3>
                    <div className="notes">
                        {this.props.notes.map(note => (
                            <div className="note" key={note.id}>
                                <div className="note-title">
                                    <h3>{note.title}</h3>
                                    <div className="remove" onClick={() => this.removeHandler(note.id)}>X</div>
                                    <div className="remove">{note.date}</div>
                                </div>
                                <div className="note-content">
                                    <p><input type="text" defaultValue={note.note} 
                                    onChange={(event) => this.updateHandler(event, note.id)} /></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )
    }
}

export default Notes
