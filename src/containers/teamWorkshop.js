import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
class teamWorkshop extends Component {

    constructor() {
        super();
        this.state = {
            team: []
        }
    }

    componentDidMount() {
        const teamId = this.props.location.state.currentTeam

        fetch(`http://localhost:3001/loadpoketeams/${teamId}`)
        .then(resp => resp.json())
        .then(team => this.setState({team: team}))
    }

    addPokemonClick = () => {
        const teamId = this.props.location.state.currentTeam

        fetch('http://localhost:3001/poke_on_teams', {
            method: 'POST',
            headers: {
                "Content-type": 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user_team_id: teamId})
        })
        .then(resp => resp.json())
        .then(poke => this.setState({team: [...this.state.team, poke]}))
    }

    render() {
        return (
            <div>
                <div className='pokemon-on-team'>
                    {this.state.team.map(member => <div>{member.user_team_id}</div>)}
                    <Button onClick={this.addPokemonClick} >Add Pokemon</Button>
                </div>

            </div>
        );
    }
}

export default teamWorkshop;
