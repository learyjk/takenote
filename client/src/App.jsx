import React from 'react';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx';
import NoteView from './components/NoteView.jsx';

import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'list',
      notes: [],
      selectedNoteId: null,
    };

    this.selectNote = this.selectNote.bind(this);
  }

  componentDidMount = () => {
    this.getAllNotes((notes) => {
      this.setState({ notes })
    })
  }

  getAllNotes = (callback) => {
    axios({
      method: 'get',
      url: '/api/notes',
    }).then((results) => {
      callback(results.data);
    });
  }

  handleAddNote = (note) => {
    console.log(note);
    axios({
      method: 'post',
      url: '/api/notes',
      data: note
    }).then((results) => {
      this.getAllNotes((notes) => {
        this.setState({ notes }, () => {
          this.changePage('list');
        })
      })
    });
  }

  changePage(page) {
    this.setState({
      page: page
    })
  }

  selectNote = (selectedNoteId) => {
    console.log('selected note with id: ' + selectedNoteId);
    this.setState({ selectedNoteId }, () => {
      this.changePage('noteView');
    })
  }

  handleStatus = (event, noteId) => {
    let status = event.target.name;
    let id = parseInt(event.target.dataset.id);
    console.log('set note: ', id, ' to status: ', status);
    let notes = this.state.notes.slice();

    for (let note of notes) {
      if (note.id === id) {
        note.status = status
      }
    }
    console.log(notes);

    this.setState({ notes })
  }

  pageRouter() {
    if (this.state.page === 'list') {
      return <Notes notes={this.state.notes} selectNote={this.selectNote} />
    } else if (this.state.page === 'newNote') {
      return <AddNote handleAddNote={this.handleAddNote} />
    } else if (this.state.page === 'noteView') {
      // get note with id = selectedNote id.
      const note = this.state.notes.find(note => note.id === this.state.selectedNoteId);
      return <NoteView note={note} handleStatus={this.handleStatus} />
    }
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="nav">
            <span className="title"
              onClick={() => this.changePage('list')}>
              Take Note!
            </span>
            <span className={this.state.page === 'list'
              ? 'nav-entry-selected button'
              : 'nav-entry-unselected button'}
              onClick={() => { this.changePage('list') }}>
              All Notes
            </span>
            <span className={this.state.page === 'newNote'
              ? 'nav-entry-selected button'
              : 'nav-entry-unselected button'}
              onClick={() => { this.changePage('newNote') }}>
              New Note
            </span>
          </div>
        </div>
        <div className="content">
          {this.pageRouter()}
        </div>

      </div>
    )
  }
}

export default App;
