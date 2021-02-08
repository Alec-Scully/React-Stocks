import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    myStocks: [],
    filteredStocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stockData => this.setState({
        stocks: stockData,
        filteredStocks: stockData
      }))
  }

  buyStock = (stock) => {
    if(!this.state.myStocks.includes(stock))
      this.setState({
        myStocks: [...this.state.myStocks, stock]
      })
    console.log("I'm clicked!")
  }

  sellStock = (stock) => {
    this.setState({
      myStocks: this.state.myStocks.filter(thisStock => thisStock !== stock)
    })
  }

  filterStock = (filter) => {
    let newFilteredStocks = this.state.stocks.filter(stock => stock.type === filter)
    this.setState({
      filteredStocks: newFilteredStocks
    })
  }

  sortStock = (sort) => {
    console.log("click" + sort)
    if (sort === "Alphabetically") {
      let newSortedStocks = this.state.filteredStocks.sort()
      console.log(this.state.filteredStocks)
      console.log(newSortedStocks)
    }
  }
  
  render() {
    return (
      <div>
        <Header />
        <MainContainer sortStock={this.sortStock} filterStocks={this.filterStock} sellStock={this.sellStock} buyStock={this.buyStock} myStocks={this.state.myStocks} stocks={this.state.filteredStocks}/>
      </div>
    );
  }
}

export default App;

/* 
  DONE - render all stocks onto the page
  DONE - allow a user to buy a stock by clicking on it
      DONE - when it is bought, add stock to My Portfolio
  DONE - allow a user to sell a stock by clicking on it 
      DONE - when it is bough, remove stock from My Portfolio
  User should be able to list stocks
      alphabetically and by ascending price
  DONE - Filter stocks based on the type of stock
*/