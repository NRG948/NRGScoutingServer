import React, { Component } from 'react';

class newEntry extends Component {
    constructor(){
        super();
        this.state = {
            newEntry:{}
        }
    }
    static defaultProps = {
        fieldSides:['Red 1', 'Red 2', 'Red 3', 'Blue 1', 'Blue 2', 'Blue 3']
    }

    handleSubmit(e){
        if(this.refs.matchNum.value === ''){
            alert('Match Number Required');
        }else{
            console.log("access props")
            console.log();
            console.log(this.refs.matchNum.value);
            console.log("after props")
            this.set.state({newEntry:{
                MatchNum:this.refs.matchNum.value,
               Side: this.refs.sideChose.value,
                TeamName:this.refs.TeamName.value
            }}, function(){
                this.props.newEntryAdd(this.state.newEntry)
            });
        }
        e.preventDefault();
    }
  render() {
      let sides = this.props.fieldSides.map(sideChose => {
          return <option key = {sideChose} value="category">{sideChose}</option>
      });
    return (
      <div>
      <h3>New Entry</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
              <label>Team Name</label>
              <input type="text" ref="teamName"/>
          </div>
          <div>
              <label>Match Number</label>
              <input type="number" ref="matchNum"/>
          </div>
          <div>
              <label>Side</label>
              <select ref="sideChose">
              {sides}
              </select>
          </div>
          <input type="submit" value="Submit"/>
      </form>
      </div>
    );
  }
}

export default newEntry;
