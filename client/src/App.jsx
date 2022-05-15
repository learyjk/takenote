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
    this.handleEdit = this.handleEdit.bind(this);
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
    this.incrementViewCount(selectedNoteId, this.state.notes[selectedNoteId - 1].viewCount, () => {
      this.setState({ selectedNoteId }, () => {
        this.changePage('noteView');
      });
    });
  }

  handleEdit = (event) => {
    let id = parseInt(event.target.dataset.id);
    let fieldName = event.target.dataset.field;
    const newValue = prompt(`Enter new ${fieldName}: `);
    axios({
      method: 'patch',
      url: '/api/notes',
      data: { id: id, [fieldName]: newValue }
    }).then((results) => {
      let notes = this.state.notes.slice();
      for (let note of notes) {
        if (note.id === id) {
          note[fieldName] = newValue;
        }
      }
      this.setState({ notes })
    });
  }

  handleStatus = (event) => {
    let status = event.target.name;
    let id = parseInt(event.target.dataset.id);
    axios({
      method: 'patch',
      url: '/api/notes',
      data: { id, status }
    }).then((results) => {
      let notes = this.state.notes.slice();
      for (let note of notes) {
        if (note.id === id) {
          note.status = status
        }
      }
      console.log(notes);
      this.setState({ notes })
    });
  }

  incrementViewCount = (noteId, noteViews, callback) => {
    let notes = this.state.notes.slice();
    for (let note of notes) {
      if (note.id === noteId) {
        note.viewCount = noteViews + 1;
      }
    }
    this.setState({ notes }, () => {
      axios({
        method: 'patch',
        url: '/api/notes',
        data: { id: noteId, viewCount: noteViews + 1 }
      }).then(() => {
        callback();
      })
    })
  }

  pageRouter() {

    if (this.state.page === 'list') {
      return <Notes notes={this.state.notes} selectNote={this.selectNote} />
    } else if (this.state.page === 'newNote') {
      return <AddNote handleAddNote={this.handleAddNote} />
    } else if (this.state.page === 'noteView') {
      const note = this.state.notes.find(note => note.id === this.state.selectedNoteId);
      return <NoteView note={note} handleStatus={this.handleStatus} handleEdit={this.handleEdit} />
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
