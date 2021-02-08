import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar sortStock={this.props.sortStock} filterStock={this.props.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer buyStock={this.props.buyStock} stocks={this.props.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.props.sellStock} myStocks={this.props.myStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
