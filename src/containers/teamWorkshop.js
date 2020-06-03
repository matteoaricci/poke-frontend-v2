import React, { Component } from 'react';
import {Button, Container, Row, Col, Card} from 'react-bootstrap'
import PokemonList from '../components/pokemonList'
import SelectedPokeInfo from '../components/selectedPokeInfo'


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
        this.setState({selectedMember: {pokemon: this.state.team[ind], ind: ind}})
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

    removePokemonClick = (event) => {
        console.log(event.target.id)

        let currentPokeInd = event.target.id 
        let currentPoke = this.state.team[currentPokeInd].id

        fetch(`http://localhost:3001/poke_on_teams/${currentPoke}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(gone => this.setState({team: this.state.team.filter(member => member.id !== gone.id)}))
    }

    render() {
        return (
            <div>

                <Container style={{padding: 0}} className='pokemon-on-team'>
                    <Row noGutters>
                        {this.state.team.map((member, index) => 
                        <Col xs>
                            <Card id={index} onClick={event => this.handleMemberClick(event)}>
                                <Card.Title>
                                    {member.pokemon_id}
                                </Card.Title>
                                <Card.Body>
                                    {member.id}
                                </Card.Body>
                            </Card>
                                <Button style={{width: '90%'}} id={index} onClick={event => this.removePokemonClick(event)}>Remove</Button>
                        </Col>)}

                        {this.state.team.length < 6 ? <Button onClick={this.addPokemonClick} >Add Pokemon</Button> : null}
                    </Row>
                </Container>

                <Container className='select-poke-info'>
                    <SelectedPokeInfo selectedPoke={this.state.selectedMember}/>
                </Container>

                <Container style={{padding: 0, overflow: 'auto', height: '50em'}}>
                   {this.props.location.state.pokemon.map(pokemon => <PokemonList pokemon={pokemon}/>)}
                </Container>

            </div>
        );
    }
}

export default teamWorkshop;
