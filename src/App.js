import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
// import { heroes } from './heroes';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      heroes: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=64be1956400c447a070fadcf00d7dbd8').then(response => {
      return response.json();
    })
    .then(heroes => {
      let data = heroes.data.results
      console.log(data)
      this.setState({heroes: data})
    })
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render() {
    const filteredHeroes = this.state.heroes.filter(heroe => {
      return heroe.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if(this.state.heroes.length === 0) {
      return <h3> Loading </h3>
    } else {
      return (
        <div className='tc'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Marvel Characters</h1>
        
          {/* <h1>Marvel Characters</h1> */}
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList heroes={filteredHeroes}/>
        </div>
      );
    }
    
  }
}

export default App;
