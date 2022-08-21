import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onSearch(e);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="search employee"
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}
export default SearchPanel;
