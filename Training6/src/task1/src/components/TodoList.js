import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { List, Button, Icon, Row, Col, Checkbox } from 'antd';
import { getTodos } from '../redux/selectors/todos';
import * as todosActions from '../redux/actions/todos'

class TodoList extends Component {
	componentDidMount() {
		const { getTodo } = this.props;
		getTodo();
	}

	deleteTask = (item) => {
		const { deleteTodo, todos } = this.props;
		deleteTodo(item.id);
	}

	toggleTask = (item) => {
		const { toggleTodo, todos } = this.props;
		let clonedItem = Object.assign({}, item);
		clonedItem.completed = !clonedItem.completed;
		toggleTodo(clonedItem);
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
										{ item.completed ? <del>{item.name}</del> : item.name }
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
	getTodo: todosActions.getTodo,
	toggleTodo: todosActions.toggleTodo,
	deleteTodo: todosActions.deleteTodo,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(TodoList)

