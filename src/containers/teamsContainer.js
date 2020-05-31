import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class teamsContainer extends Component {

    componentDidMount() {
        fetch('http://localhost:3001/userteams')
        .then(resp => resp.json())
        .then(teams => console.log(teams))
    }

    render() {
        return (
            <div>
                <Button>Create New Team</Button>
            </div>
        );
    }
}

export default teamsContainer;
