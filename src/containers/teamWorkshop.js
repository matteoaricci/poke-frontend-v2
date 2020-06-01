import React, { Component } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'
import PokemonList from '../components/pokemonList'
import {connect} from 'react-redux'

class teamWorkshop extends Component {

    constructor() {
        super();
        this.state = {
            team: [],
            selectedMember: ''
        }
    }

    componentDidMount() {
        const teamId = this.props.location.state.currentTeam

        fetch(`http://localhost:3001/loadpoketeams/${teamId}`)
        .then(resp => resp.json())
        .then(team => this.setState({team: team}))
    }

    handleMemberClick = (event) => {
        let ind = event.currentTarget.id
        this.setState({selectedMember: this.state.team[ind]})
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
                <Container style={{paddingLeft: 0, paddingRight: 0}} className='pokemon-on-team'>
                    <Row>
                        {this.state.team.map((member, index) => <Col xs id={index} onClick={event => this.handleMemberClick(event)}>{member.id}</Col>)}
                        {this.state.team.length < 6 ? <Button onClick={this.addPokemonClick} >Add Pokemon</Button> : null}
                    </Row>
                </Container>

                <Container fluid className='pokemon-container'>
                   {this.props.location.state.pokemon.map(pokemon => <PokemonList pokemon={pokemon}/>)}
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        pokemon: state.fetchPokeReducer.pokemons
    }
}

export default teamWorkshop;
