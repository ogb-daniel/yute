import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = (e) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    e.preventDefault();
  };

  render() {
    return (
      <div className="max-w-lg w-full py-4 px-8 bg-white shadow-lg rounded-lg my-10">
        <form onSubmit={this.handleSubmit}>
          <input
            className="w-full outline-none"
            type="text"
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
