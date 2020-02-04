import React from 'react';

const Todo = ({todo}) => {
	return (
		<div>
			<p>{todo.id}</p>
			<p>{todo.title}</p>
			<p>{todo.description}</p>
		</div>
	);
};

export default Todo;