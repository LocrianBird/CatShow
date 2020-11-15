import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from './components/robots';
import Scroll from './components/Scroll';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render(){
    const { robots, searchfield } = this.state;
    const filterCats = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1 fw1">CATSHOW</h1>
          <SearchBox searchchange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filterCats} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;