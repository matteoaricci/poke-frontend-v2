import React, { Component } from 'react';

class selectedPokeInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    <h5>Species</h5>
                    {this.props.pokemon[0].name}
                </div>
            </div>
        );
    }
}

export default selectedPokeInfo;
