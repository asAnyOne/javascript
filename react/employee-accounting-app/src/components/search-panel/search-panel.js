import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="search employee"
        onChange={(e) => {
          this.setState({
            value: e.target.value,
          });
          this.props.onSearch(e);
        }}
        value={this.state.value}
      />
    );
  }
}
export default SearchPanel;
