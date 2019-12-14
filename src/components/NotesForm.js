import React, { Component } from 'react'
import * as firebase from 'firebase';

class NotesForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title : '',
             note : '',
        }
    }
    
    changeHandler = (event, key) => {
        this.setState({
            [key] : event.target.value
        })
    }

    createNote = () => {
        var date = new Date().toDateString();
        console.log(date);
        if(this.state.title!=='' && this.state.note!==''){
            firebase.database().ref('notes').push({
                title : this.state.title,
                note : this.state.note,
                date : date
            })
        }
    }

    render() {
        return (
            <section className="noteform">
                <h3>Create New Note</h3>
                <div className="form-group">
                    <label htmlFor="noteform-title">Title</label>
                    <input type="text" id="noteform-title" name="noteform-title" value={this.state.title} 
                    onChange={(event) => this.changeHandler(event, 'title')} />
                </div>
                <div className="form-group">
                    <label htmlFor="noteform-note">Note</label>
                    <input id="noteform-note" name="noteform-note" value={this.state.note} 
                    onChange={(event) => this.changeHandler(event, 'note')} />
                </div>
                <button onClick={this.createNote}>Create Note</button>
            </section>
        )
    }
}

export default NotesForm
