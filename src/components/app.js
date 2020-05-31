import React, { Component } from 'react';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchingPokemons from "../actions/fetchPokemons"
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
    {pokemons: state.fetchPokeReducer.pokemons}
  )
}


export default connect(mapStateToProps)(App)