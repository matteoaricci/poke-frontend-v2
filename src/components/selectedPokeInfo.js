import React, { Component } from 'react';
import {Input, Form} from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider';

class selectedPokeInfo extends Component {

    handleEffortChange = event => {
        console.log(event.currentTarget)
    }

    componentDidMount() {
        console.log('she mounted again')
    }

    componentWillUnmount() {
        console.log('she unmounted')
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
                        <h5>{this.props.selectedPoke.pokemon.hp_ev}</h5><RangeSlider size='sm' style={{transition: 'none'}} onChange={event => this.props.changeEffortValues(event)} className='hp_ev' value={parseInt(this.props.selectedPoke.pokemon.hp_ev)} step={1} max={252}/>
                        <RangeSlider size='sm' onChange={event => this.props.changeEffortValues(event)} className='attack_ev' value={this.props.selectedPoke.pokemon.attack_ev || 0} step={4} max={252}/>
                        <RangeSlider size='sm' onChange={event => this.props.changeEffortValues(event)} className='defense_ev' value={this.props.selectedPoke.pokemon.defense_ev || 0} step={4} max={252}/>
                        <RangeSlider size='sm' onChange={event => this.props.changeEffortValues(event)} className='spattack_ev' value={this.props.selectedPoke.pokemon.spattack_ev || 0} step={4} max={252}/>
                        <RangeSlider size='sm' onChange={event => this.props.changeEffortValues(event)} className='spdefense_ev' value={this.props.selectedPoke.pokemon.spdefense_ev || 0} step={4} max={252}/>
                        <RangeSlider size='sm' onChange={event => this.props.changeEffortValues(event)} className='speed_ev' value={this.props.selectedPoke.pokemon.speed_ev || 0} step={4} max={252}/>
                    </Form>

                </div>
            </div>
        );
    }
}

export default selectedPokeInfo;
