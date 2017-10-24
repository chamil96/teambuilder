//Gets Component class because we're dealing with components in state
import React, { Component } from 'react';

//Initial state
const initState = {
	  players: [
	    "Chris",
			"Victoria",
			"Miguel",
			"Lesly",
			"Mickey",
			"Ivan",
			"Mark",
			"Ian",
			"Angel",
			"Hunter"
	  ],
		teamA: [],
		teamB: []
	};

//Makes new class that inherits methods and properties from Component class
class App extends Component {
	//gives you access to state and properties from Component
	constructor(){
		super();
		this.state = initState;
	}

//Functionality for assigning players
teamAssignA(e){
	let copyState = Object.assign({},this.state);
	//finding index of player(teamPlayer)
	let teamPlayer = e.target.value;

	//Checks to see which section to pull player
	if (this.state.players.includes(teamPlayer)){
		//gets index of player
		let index = copyState.players.indexOf(teamPlayer);
		if (index > -1) {
			copyState.players.splice(index, 1);
			copyState.teamA.push(teamPlayer);
		}
	}else if(this.state.teamB.includes(teamPlayer)){
		let index = copyState.teamB.indexOf(teamPlayer);
		if (index > -1) {
			copyState.teamB.splice(index, 1);
			copyState.teamA.push(teamPlayer);
		}
	}


	this.setState({
		copyState
	})
}

teamAssignB(e){
	let copyState = Object.assign({},this.state);
	//finding index of player(teamPlayer)
	let teamPlayer = e.target.value;


	//Checks to see which section to pull player
	if (this.state.teamA.includes(teamPlayer)){
		let index = copyState.teamA.indexOf(teamPlayer);
		if (index > -1) {
			copyState.teamA.splice(index, 1);
			copyState.teamB.push(teamPlayer);
		}
	}else if(this.state.players.includes(teamPlayer)){
		let index = copyState.players.indexOf(teamPlayer);
		if (index > -1) {
			copyState.players.splice(index, 1);
			copyState.teamB.push(teamPlayer);
		}
	}


	this.setState({
		copyState
	})
}

unsassignTeam(e){
	let copyState = Object.assign({},this.state);
	//finding index of player(teamPlayer)
	let teamPlayer = e.target.value;


	//Checks to see which section to pull player
	if (this.state.teamA.includes(teamPlayer)){
		let index = copyState.teamA.indexOf(teamPlayer);
		if (index > -1) {
			copyState.teamA.splice(index, 1);
			copyState.players.push(teamPlayer);
		}
	}else if(this.state.teamB.includes(teamPlayer)){
		let index = copyState.teamB.indexOf(teamPlayer);
		if (index > -1) {
			copyState.teamB.splice(index, 1);
			copyState.players.push(teamPlayer);
		}
	}


	this.setState({
		copyState
	})
}

	//is called in the index.html
  render() {
		const unassigned = this.state.players.map(function(player){
			return(
				<li><button value={player} onClick={(e)=>{this.teamAssignA(e)}}>TeamA</button>
				{player}
				<button value={player} onClick={(e)=>{this.teamAssignB(e)}}>TeamB</button></li>
			)
		}, this);

		const teamA = this.state.teamA.map(function(player){
			return(
				<li><button value={player} onClick={(e)=>{this.teamAssignB(e)}}>TeamB</button>
				{player}
				<button value={player} onClick={(e)=>{this.unsassignTeam(e)}}>Free</button></li>
			)
		}, this);

		const teamB = this.state.teamB.map(function(player){
			return(
				<li><button value={player} onClick={(e)=>{this.teamAssignA(e)}}>TeamA</button>
				{player}
				<button value={player} onClick={(e)=>{this.unsassignTeam(e)}}>Free</button></li>
			)
		}, this);
    return (
      <div id="container">
		    <h1 id="roster-head">Welcome to the Space Jam!</h1>
		    <section className="free-agents">
			     <h2>Free Agents</h2>
           <ol id="teams">
					 	{unassigned}
           </ol>
		    </section>
		    <section className="team-selection">
			     <section className="team a">
				     <h2>Monstars</h2>
						 <ol id="teams">
							{teamA}
	           </ol>
			     </section>
			     <section className="team b">
				     <h2>Tune Squad</h2>
						 <ol id="teams">
						 	{teamB}
	           </ol>
			     </section>
		    </section>
	    </div>
    );
  }
}

export default App;
