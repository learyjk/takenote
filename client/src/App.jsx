import React from 'react';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx';

import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'list',
      notes: []
    };
  }

  componentDidMount = () => {
    this.getAllNotes((notes) => {
      console.log(notes);
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

  changePage(page) {
    this.setState({
      page: page
    })
  }

  pageRouter() {
    if (this.state.page === 'list') {
      return <Notes notes={this.state.notes} />
    } else if (this.state.page === 'newNote') {
      return <AddNote />
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
