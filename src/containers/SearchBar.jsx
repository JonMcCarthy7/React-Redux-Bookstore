import React, { Component } from "react";
import { filterWord } from "../store/actions/bookActions";
import { connect } from "react-redux";

class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={this.props.word}
              onChange={e => {
                filterWord(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  word: state.word
});

export default connect(
  mapStateToProps,
  { filterWord }
)(SearchBar);
