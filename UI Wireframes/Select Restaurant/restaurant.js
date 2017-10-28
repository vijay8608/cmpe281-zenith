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
