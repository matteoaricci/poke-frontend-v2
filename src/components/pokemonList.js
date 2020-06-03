import React, { Component } from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap'

class PokemonList extends Component {

    constructor() {
        super();
        this.state = {
            hover: false
        }
    }

    mouseEnter = () => {
        this.setState({hover: true})
    }

    mouseExit = () => {
        this.setState({hover: false})
    }

    render() {
        const poke = this.props.pokemon
        return (
            <Row id={poke.id} noGutters onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit} style={{backgroundColor: this.state.hover ? 'grey' : null}}>
                <Col xs={2}>{poke.name}</Col>
                <Col>{poke.type2 != 'null' ? `${poke.type2} / ${poke.type1}` : `${poke.type1}`}</Col>
                <Col>{poke.hp_stat} {poke.attack_stat} {poke.defense_stat} {poke.sp_attack_stat} {poke.sp_defense_stat} {poke.speed_stat}</Col>
            </Row>
        );
    }
}

export default PokemonList;
