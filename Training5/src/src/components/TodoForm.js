import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as todosActions from '../redux/actions/todos'

class TodoForm extends Component {
	addTask = () => {
		const { addTodo } = this.props;
		const valueInput = this.input.input.value;
		if(valueInput) {
			addTodo(valueInput);
		}
	}

    render() {
        return (
            <div className="TodoForm">
            	<Input className="add-button" ref={(ref) => { this.input = ref; }}/>
            	<Button onClick={this.addTask} type="primary">
					Add
				</Button>
            </div>
        );
    }
}

const mapDispatchToProps = {
	addTodo: todosActions.addTodo,
};

export default compose(
	connect(null, mapDispatchToProps),
)(TodoForm)



