import React, { Component } from 'react';
import Entries from './Components/allEntries';
import NewEntry from './Components/newEntry';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={ Matches: [
              ]
    }
    }
  
    componentWillMount(){
      this.setState({
        Matches:[ {
          "MatchNum":1,
          "Side": "Red1",
          "TeamName":"NRG 948"
        },
        {
          "MatchNum":2,
          "Side": "Red1",
          "TeamName":"NRG 948"
        }
      ]});
    }

    handleNewEntry( project){
      let Matches = this.state.Matches;
      Matches.push(project);
      this.setState({Matches:Matches});
    }
  render() {
    return (
      <div className="App">
     <NewEntry newEntryAdd={this.handleNewEntry.bind(this)}/>
      <Entries Matches={this.state.Matches}/>
      </div>
    );
  }
}

export default App;
