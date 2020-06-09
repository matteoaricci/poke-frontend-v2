import React, { Component } from 'react';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import fetchingPokemons from "../actions/fetchPokemons"
import fetchingMoveSets from '../actions/fetchMoveSets'
import fetchingMoves from '../actions/fetchMoves'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from "./navBar"
import teamsContainer from '../containers/teamsContainer'
import teamWorkshop from '../containers/teamWorkshop'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchingPokemons())
    this.props.dispatch(fetchingMoveSets())
    this.props.dispatch(fetchingMoves())
  }

  render() {
    return (
      <Router>
      <div className='app'>
        <NavBar/>
        <Route path='/teams' component={teamsContainer}/>
        <Route path='/teamworkshop' component={teamWorkshop}/>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return (
    {
      pokemons: state.fetchPokeReducer.pokemons,
      moves: state.fetchMoveReducer.moves,
      moveSets: state.fetchMoveSetReducer.moveSets
    }
  )
}


export default connect(mapStateToProps)(App)