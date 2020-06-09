import React, { Component } from 'react';
import debounce from "lodash.debounce";
import {Button, Container, Row, Col, Card} from 'react-bootstrap'
import PokemonList from '../components/pokemonList'
import SelectedPokeInfo from '../components/selectedPokeInfo'


class teamWorkshop extends Component {

    constructor() {
        super();
        this.state = {
            team: [],
            selectedMember: false,
            movesets: []
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

    pokemonListClick = event => {
        const type = event.target.parentElement.className.split(' ')[0]
        const payload = event.target.parentElement.id
        this.patchPokemon(type, payload)
    }

    patchPokemon = (type, payload) => {
        const currentMember = this.state.selectedMember.pokemon.id
        const ind = this.state.selectedMember.ind
        fetch(`http://localhost:3001/poke_on_teams/${currentMember}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({[type]: payload})
        })
        .then(resp => resp.json())
        .then(updatedPoke => {
            const updatedTeam = this.state.team
            updatedTeam[ind] = updatedPoke
            this.setState({selectedMember: {pokemon: updatedPoke, ind: ind}, team: updatedTeam})
    })
    }

    changeNickname = event => {
        const type = 'nickname'
        const payload = event.target.value
        this.patchPokemon(type, payload)
    }

    changeEffortValues = event => {
       const type = event.currentTarget.className.split(' ')[0]
       const payload = event.currentTarget.value
       const ind = this.state.selectedMember.ind 
       const currentPoke = this.state.selectedMember.pokemon
       currentPoke[type] = payload
       this.setState({selectedMember: {pokemon: currentPoke, ind: ind}})

       this.debounceFunction(type, payload)
    }

    debounceFunction = debounce((type, payload) => {
        this.patchPokemon(type, payload)
    }, 500)

    teamHasPoke = () => {
        if (this.state.team.length > 0) {
            return true
        } else {
            return false
        }
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
                                    {member.pokemon_id != null ? this.props.location.state.pokemon.filter(poke => poke.id === member.pokemon_id)[0].name : null}
                                </Card.Title>
                                <Card.Body>
                                    {member.nickname !== 'null' ? member.nickname : null}
                                </Card.Body>
                            </Card>
                                <Button style={{width: '90%'}} id={index} onClick={event => this.removePokemonClick(event)}>Remove</Button>
                        </Col>)}

                        {this.state.team.length < 6 ? <Button onClick={this.addPokemonClick} >Add Pokemon</Button> : null}
                    </Row>
                </Container>

                <Container className='select-poke-info'>
                    {this.state.selectedMember && this.state.selectedMember.pokemon.pokemon_id != null ? 
                    <SelectedPokeInfo 
                    changeEffortValues={event => this.changeEffortValues(event)} 
                    changeNickname={event => this.changeNickname(event)} 
                    pokemon={this.props.location.state.pokemon.filter(poke => poke.id === this.state.selectedMember.pokemon.pokemon_id)} 
                    selectedPoke={this.state.selectedMember}/> : null }
                    
                </Container>
                        
                {this.state.selectedMember ? 
                <Container onClick={event => this.pokemonListClick(event)} style={{padding: 0, overflow: 'auto', height: '50em'}}>
                   {this.props.location.state.pokemon.map(pokemon => <PokemonList pokemon={pokemon}/>)}
                </Container>
                : 
                <h3>Select a Party Member</h3>}
            </div>
        );
    }
}

export default teamWorkshop;
