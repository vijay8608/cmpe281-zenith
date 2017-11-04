import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      //display restaurant details
		<div>
			<div className="menu">
				<h3>Menu</h3>
				<div className="appTitle">
					<div className="item">
						<span className="itemName">StarBucks</span><a>$20.00</a>
						<button
							onClick={() => {
                                this.props.addTodo("Starbucks");
                                addQuantity("StarBucks");
                                newTotal(20);
								}}>+</button>
						
					</div>
					<p>
					<div className="item">
						<span className="itemName">Subway $20.00</span>
						<button
							onClick={() => {
                                this.props.addTodo("Subway");
								addQuantity("Subway");
                                newTotal(20)
                            }}>+</button>
						
					</div>
					</p>
				</div>	
		
			</div>
</div>
    );
  }
}

export default App;
