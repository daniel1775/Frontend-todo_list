import React, { useState, useEffect } from "react";
import todos from "./apis";

import Form from "./views/Form/Form.jsx";
import Section from "./views/Section/Section.jsx";
import List from "./views/List/List.jsx";
import flower from './img/flower.png';
import './App.css'

const appTitle = "Flores del Tampo"; //constante para el titulo

const App = () => {
    const [todoList, setTodoList] = useState([]);

    async function fetchData(current) {
        const { data } = await todos.get("/todos/search-all");
        await current!==undefined ? setTodoList(current) : setTodoList(data);
    }

    useEffect(() => {
        console.log("POST FIXED");
    }, [todoList]);

    useEffect(() => {
        fetchData();
    }, []);

    const addTodo = async (item) => {
        await todos.post("/todos/create", item);
        fetch("https://backend-tamba-flowers.herokuapp.com/todos/search-all")
        .then(da => da.json())
        .then(resul => setTodoList(resul));
        //setTodoList((oldList) => [...oldList, data]);
    };

    const removeTodo = async (id) => {
        setTodoList((oldList) => oldList.filter((item) => item._id !== id));
        await todos.delete(`/todos/delete/${id}`);
    };

    const editTodo = async (id, item) => {
        await todos.put(`/todos/update/${id}`, item);
    };

    return (
        <>
        <div className="header">
            <img className="flowers" src={flower} alt="garden"/>
        </div>
        <div className="ui container center aligned">
            <Section>
                <h1 className="title">{appTitle}</h1>   
                <h2 className="subtitle">TO-DO LIST</h2>
            </Section>
    
            <Section>
                <Form addTodo={addTodo} />
            </Section>

            <Section>
                <List
                    editTodoListProp={editTodo}
                    removeTodoListProp={removeTodo}
                    list={todoList}
                />
            </Section>
        </div>
        </>
    );
};

export default App;