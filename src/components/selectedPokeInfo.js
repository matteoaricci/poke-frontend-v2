import React, { Component } from 'react';
import {Input, Form} from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider';

class selectedPokeInfo extends Component {

    handleEffortChange = event => {
        console.log(event.currentTarget)
    }

    render() {
        return (
            <div>
                <div>
                    <h5>Species</h5>
                    {this.props.pokemon[0].name}

                    <Form className='nickname'>
                        <Form.Control onChange={event => this.props.changeNickname(event)} value={this.props.selectedPoke.pokemon.nickname} type='text' placeholder="Nickname" />
                    </Form>

                    <Form >
                        <RangeSlider className='hp_ev' value={0} step='4' max='252'/>
                        {/* <RangeSlider className='attack_ev' value={this.state.attack_ev} step='4' max='252'/>
                        <RangeSlider className="defense_ev" value={this.state.defense_ev} step='4' max='252'/>
                        <RangeSlider className='spattack_ev' value={this.state.spattack_ev} step='4' max='252'/>
                        <RangeSlider className='spdefense_ev' value={this.state.spdefense_ev} step='4' max='252'/>
                        <RangeSlider className='speed_ev' value={this.state.speed_ev} step='4' max='252'/> */}
                    </Form>

                </div>
            </div>
        );
    }
}

export default selectedPokeInfo;
