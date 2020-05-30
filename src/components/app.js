import React, { Component } from 'react';
import {connect} from 'react-redux'
import fetchingPokemons from "../actions/fetchPokemons"

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchingPokemons())
  }

  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return (
    {pokemons: state.fetchPokeReducer.pokemons}
  )
}


export default connect(mapStateToProps)(App)