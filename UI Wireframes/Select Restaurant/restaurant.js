mport React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addTodo} from "./actions";
import {doneTodo} from "./actions";

let x=0;

class restaurant extends React.Component{
	
	constructor(){
		super();
		this.state = {
			value: 'this is the default state.'
		}
		
	}


				
	render(){
        return(
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
function mapStateToProps(todos) {
	console.log(todos);
    const todoArr = Object.keys(todos).map((item) => (
        {
            'todo' : item,
            'status' : todos[item]
        }
    ));
    return {todoArr};
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo : (data) => dispatch(addTodo(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(restaurant);    
