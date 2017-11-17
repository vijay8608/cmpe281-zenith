
mport React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addTodo} from "./actions";
import {doneTodo} from "./actions";

let x=0;

class mostpopular extends React.Component{
	
	constructor(){
		super();
		this.state = {
			value: 'this is the default state.'
		}
		
	}


				
	render(){
        return(
        //display Most popular food items
		<div>
			<div className="menu">
				<h3>Menu</h3>
				<div className="appTitle">
					<div className="item">
						<span className="itemName">Taco</span>
						<button
							onClick={() => {
                                this.props.addTodo("Taco");
                                addQuantity("Taco");
                                newTotal(10);
								}}>+</button>
						
					</div>
					
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
