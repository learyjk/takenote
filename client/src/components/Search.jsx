import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { value: '' };
    //this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value }, () => {
  //     this.props.handleSearch(this.props.searchTerm);
  //   });
  // }

  render() {
    return (
      <form>
        <label>
          Search:
          <input type="search" value={this.props.searchTerm} onChange={this.props.handleSearch} />
        </label>
      </form>
    );
  }
}

export default Search;