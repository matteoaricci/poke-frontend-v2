import React, { Component } from 'react';
import {Card, Row, Col, Container} from 'react-bootstrap'

class PokemonList extends Component {
    render() {
        const poke = this.props.pokemon
        return (
            <Row onMouseEnter={} onMouseLeave={}>
                <Col>{poke.name}</Col>
                <Col>{poke.type2 != 'null' ? `${poke.type2} / ${poke.type1}` : `${poke.type1}`}</Col>
                <Col>{poke.hp_stat} {poke.attack_stat} {poke.defense_stat} {poke.sp_attack_stat} {poke.sp_defense_stat} {poke.speed_stat}</Col>
            </Row>
        );
    }
}

export default PokemonList;
