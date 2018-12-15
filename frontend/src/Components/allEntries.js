import React, { Component } from 'react';
import MatchEntryPage from './matchEntry';
import '../App.css';
import matchEntry from './matchEntry';

class allEntires extends Component {
  render() {
    let entries;
  if(this.props.Matches){
    entries = this.props.Matches.map(entry => {
      console.log(entry);
      return(
        <MatchEntryPage key={entry.MatchNum +entry.Side} matchEntry={entry}/>
      )
    });
  }
    return (
      <div className="allEntires">
      {entries}
      All Entires
      </div>
    );
  }
}

export default allEntires;
