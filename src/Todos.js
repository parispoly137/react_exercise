import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Todo from "./Todo";

const Todos = () => {

	let [todos, setTodos] = useState([]);
	let [form, setForm] = useState(
		title: "",
		description: ""

	);


	// 할일 목록을 불러온다
	useEffect(() => {
		axios.get("/todos")
			.then(response => {
				setTodos(response.data);
			});
	},[]);


	let changeForm = (e) => {
		form.title=e.target.value();
		form.description=e.target.value();
	};

	// 1. 할일을 입력 받기
	// 2. 할일 생성 요청을 보내서 데이터 저장하고
	// 3. 저장이 성공하면 생성한 할일을 할일 목록에 추가하기

	/* 할일 생성 요청 보내는 방법
	axios.post("/todos", form)
		.then((response) => {

		});
	*/

	return (
		<div>
			{ todos.map((todo) => {
				return (
					<Todo todo={todo}/>
				)
			})}
			<form>
				<input type="text" placeholder="Type title" onChange={changeForm} />
				<input type="text" placeholder="Type description" onChange={changeForm}/>
				<button>Add onClick={addTodo}</button>
			</form>

		</div>
	);
};

export default Todos;