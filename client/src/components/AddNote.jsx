import React from 'react';

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      tagline: '',
      note: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('event: ', event);
    this.props.handleAddNote(this.state)
  }

  render() {
    return (
      <div>
        <h1>New Note</h1>
        <form onSubmit={this.handleSubmit}>
          Title:
          <br />
          <input className="note-label" name="title" type="text" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
          <br />
          Category:
          <br />
          <input className="note-label" name="category" type="text" placeholder="Category" value={this.state.category} onChange={this.handleChange} />
          <br />
          Tagline:
          <br />
          <input className="note-label" name="tagline" type="text" placeholder="Tagline" value={this.state.tagline} onChange={this.handleChange} />
          <br />
          <input className="note-input" name="note" height="700px" type="text" placeholder="Write your note here!" value={this.state.note} onChange={this.handleChange} />
          <br />
          <button className="button">Save</button>
        </form>
      </div>
    )
  }

};

export default AddNote;
