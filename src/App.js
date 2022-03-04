import React, { useState, useEffect } from 'react';
import todos from './apis';

import Form from './views/Form/Form.jsx';
import Section from './views/Section/Section.jsx';
import List from './views/List/List.jsx';
import flower from './img/flower.png';
import './App.css';

const appTitle = 'Flores del Tampo'; //constante para el titulo

const App = () => {
	const [todoList, setTodoList] = useState([]);
	const [deleted, setDeleted] = useState(false);
	const [finalized, setFinalized] = useState(false);
  const [all, setAll] = useState(true);
  const [title, setTitle] = useState("Tareas pendientes");

	async function fetchData() {
		const { data } = await todos.get('/todos/search-all');
		setTodoList(data);
	}

  useEffect(() => {
    if(all){
      fetchData();
      setTitle("Tareas pendientes");
      setDeleted(false);
      setFinalized(false);
    }
	}, [all]);

	/* useEffect(() => {
		fetchData();
	}, []); */

  useEffect(() => {
    if(deleted){
      const listDeleted = async () => {
        const { data } = await todos.get('/todos/search-deleted');
        setTodoList(data);
      }
      setTitle("Tareas eliminadas");
      setFinalized(false);
      setAll(false);
      listDeleted();
    }else{

    }
  }, [deleted]);

  useEffect(() => {
    if(finalized){
      const listFinalized = async () => {
        const { data } = await todos.get('/todos/search-completed');
        setTodoList(data);
      }
      setTitle("Tareas finalizadas");
      setDeleted(false);
      setAll(false);
      listFinalized();
    }
  }, [finalized]);

	const addTodo = async (item) => {
		await todos.post('/todos/create', item);
		//http://localhost:3030
		//https://backend-tamba-flowers.herokuapp.com/todos/search-all
		fetch('https://backend-tamba-flowers.herokuapp.com/todos/search-all')
			.then((da) => da.json())
			.then((resul) => setTodoList(resul));
		//setTodoList((oldList) => [...oldList, data]);
	};

	const removeTodo = async (id) => {
		await todos.delete(`/todos/delete/${id}`);
		setTodoList((oldList) => oldList.filter((item) => item._id !== id));
	};

	const finalizedTodo = async (id) => {
		await todos.delete(`/todos/finalized/${id}`);
		setTodoList((oldList) => oldList.filter((item) => item._id !== id));
	};

	const editTodo = async (id, item) => {
		await todos.put(`/todos/update/${id}`, item);
	};

	return (
		<>
			<div className="header">
				<img className="flowers" src={flower} alt="garden" />
			</div>
			<div className="ui container center aligned">
				<Section>
					<h1 className="title">{appTitle}</h1>
					<h2 className="subtitle">TO-DO LIST</h2>
				</Section>

				<Section>
					<Form 
            addTodo={addTodo} 
            setDeleted={setDeleted}
            setFinalized={setFinalized}
            setAll={setAll}
          />
				</Section>

				<Section className="title_cont">
          <h2 className="title_main">{title}</h2>
					<List
						editTodoListProp={editTodo}
						removeTodoListProp={removeTodo}
						finalizedTodoListProp={finalizedTodo}
						list={todoList}
					/>
				</Section>
			</div>
		</>
	);
};

export default App;
