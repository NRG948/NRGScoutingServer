import React, { Component } from 'react';
import '../App.css';

class matchEntry extends Component {
  render() {
    console.log(this.props);
    return (
      <li className="matchEntry">
      <strong>{this.props.matchEntry.MatchNum}</strong>: {this.props.matchEntry.TeamName}
      </li>
    );
  }
}

export default matchEntry;
