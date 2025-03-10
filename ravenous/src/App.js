import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
	imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  	name: 'MarginOtto Pizzeria',
  	address: '1010 Paddington Way',
  	city: 'Flavortown',
  	state: 'NY',
  	zipCode: '10101',
  	category: 'Italian',
  	rating: 4.5,
  	reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			businesses:[]
		};
	this.searchYelp = this.searchYelp.bind(this);
	}

	searchYelp(term, location, sortBy) {
		console.log('Searching Yelp with Pizza, Brooklyn, best_match');
	}



	render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
