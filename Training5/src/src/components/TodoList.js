import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { List, Button, Icon, Row, Col, Checkbox } from 'antd';
import { getTodos } from '../redux/selectors/todos';
import * as todosActions from '../redux/actions/todos'

class TodoList extends Component {

	deleteTask = (item) => {
		const { deleteTodo, todos } = this.props;
		const index = todos.findIndex((i) => i === item);
		if(index != -1)
			deleteTodo(index);
	}

	toggleTask = (item) => {
		const { toggleTodo, todos } = this.props;
		const index = todos.findIndex((i) => i === item);
		if(index != -1)
			toggleTodo(index);
	}

    render() {
		const {todos} = this.props;
        return (
            <div className="TodoList">
            	<List
					header={<div><b>Todo List</b></div>}
					bordered
					dataSource={todos}
					className="list-data"
					renderItem={(item) => (
						<List.Item>
							<Row style={{ width: "100%" }}>
								<Col span={20}>
									<Checkbox checked={item.completed} onClick={() => this.toggleTask(item)}></Checkbox>
									<span style={{ margin: "0 5px" }}>
										{ item.completed ? <Icon type="check" /> : <Icon type="minus" /> }
									</span>
									<span>
										{ item.completed ? <del>{item.text}</del> : item.text }
									</span>
								</Col>
								<Col span={4}>
									<Button type="danger" className="delete-button" onClick={() => this.deleteTask(item)}>
										<Icon type="delete" />
									</Button>
								</Col>
							</Row>
						</List.Item>
					)}
				/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		todos: getTodos(state),
	};
}

const mapDispatchToProps = {
	deleteTodo: todosActions.deleteTodo,
	toggleTodo: todosActions.toggleTodo,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(TodoList)

