import React from "react";
import Todo from "../Todo/Todo.jsx";

const List = ({ list, removeTodoListProp, finalizedTodoListProp, editTodoListProp }) => {
    const renderedList = list?.map(
        (item) => (
            <Todo
                title={item.title}
                completed={item.completed}
                removeTodoItemProp={(e) => removeTodoListProp(item._id)}
                finalizedTodoListProp={(e) => finalizedTodoListProp(item._id)}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                key={item.title}
            />
        )
    );
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};

export default List;