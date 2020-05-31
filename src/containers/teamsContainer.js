import React, { Component } from 'react';
import {Button, Row} from 'react-bootstrap'
import teamWorkshop from './teamWorkshop'
import {Route, BrowserRouter as Router} from 'react-router-dom'

class teamsContainer extends Component {
    constructor() {
        super();
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/loadteams/1')
        .then(resp => resp.json())
        .then(teams => this.setState({teams: teams}))
    }

    newTeamClick = () => {
        console.log('new team babes!')
        fetch('http://localhost:3001/userteams', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                user_id: 1
            })
        })
        .then(resp => resp.json())
        .then(newTeam => 
            this.props.history.push({
                pathname: '/teamworkshop',
                state: {currentTeam: newTeam}
            })
        )

    }

    handleTeamClick = (event) => {
        if (event.target.name === 'delete-team') {
            this.deleteTeam(event.target.id)
        } else {
            this.editTeam(event.target.id)
        }
        
    }

    editTeam = (team) => {
        console.log('Edit this Team: ' + team)
    }

    deleteTeam = (team) => {
        console.log('Delete this Team: ' + team)
    }

    render() {
        return (
            <div >
                <Button onClick={this.newTeamClick} >Create New Team</Button>
                <div onClick={event => this.handleTeamClick(event)} className='team-list'>
                {this.state.teams.map((team, index) => <Row name='edit-team' id={team.id}>Team No {index} <Button name='delete-team'id={team.id}>Delete</Button></Row>)}
                </div>
            </div>
        );
    }
}

export default teamsContainer;
