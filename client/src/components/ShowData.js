import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShowData({ token }) {
	const [todos, setTodos] = useState([]);
	const apiUrl = 'http://localhost:5000/api/todos';

	useEffect(() => {
		if (token) {
			fetchData(token);
		}
	}, [token]);

	const fetchData = async (token) => {
		const res = await axios.get(apiUrl, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		console.log(res.data);
		setTodos(res.data);
	};

	return (
		<div>
			<h1>All the data it will show here.</h1>
			{todos?.map((todo) => (
				<ul key={todo.id}>
					<li>{todo.title}</li>
				</ul>
			))}
		</div>
	);
}
