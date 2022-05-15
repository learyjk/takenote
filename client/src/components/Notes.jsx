import React from 'react';
import Note from "./Note.jsx";
import Search from './Search.jsx';

class Notes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showHiddenNotes: false,
      searchTerm: '',
    }
  }

  handleCheck = (event) => {
    let showHiddenNotes = event.target.checked;
    this.setState({ showHiddenNotes });
  }

  handleSearch = (event) => {
    let searchTerm = event.target.value;
    this.setState({ searchTerm });
  }

  render() {
    const f_notes = this.props.notes.filter((note) => {
      let searched = note.category.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      let hidden = note.status !== "Hidden" || this.state.showHiddenNotes;
      return searched && hidden;
    })

    let sf_notes = f_notes.sort((a, b) => {
      let viewsA = a.viewCount;
      let viewsB = b.viewCount;
      if (viewsA > viewsB) {
        return 1;
      } else {
        return -1;
      }
    });

    sf_notes = sf_notes.sort((a, b) => {
      let statusA = a.status;
      let statusB = b.status;
      if (statusA < statusB) {
        return 1;
      } else {
        return -1;
      }
    });

    return (
      <div>
        <h1>My Notes</h1>
        <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
        <div>
          <label>Show Hidden Notes
            <input type="checkbox" name="showHiddenNotes" onChange={this.handleCheck}></input>
          </label>
        </div>
        <div className="notes-list">
          {sf_notes.map((note) => {
            return <Note key={note.id} note={note} selectNote={this.props.selectNote} />
          })}
        </div>
      </div>
    )
  }
}

// const Notes = ({ notes, selectNote, handleSearch, searchTerm, toggleHiddenNotes, showHiddenNotes }) => {

//   return (
//     <div>
//       <h1>My Notes</h1>
//       <Search handleSearch={handleSearch} searchTerm={searchTerm} />
//       <div>
//         <label>Show Hidden Notes
//           <input type="checkbox" name="showHiddenNotes" onChange={toggleHiddenNotes} value={showHiddenNotes}></input>
//         </label>
//       </div>
//       <div className="notes-list">
//         {notes.map((note) => {
//           return <Note key={note.id} note={note} selectNote={selectNote} />
//         })}
//       </div>
//     </div>
//   )
// }

export default Notes;