/* Import of the React module */
import React from "react";
/* Import of the Todo module */
import Todo from "../Todo/Todo.jsx";

/* Arrow function to create the lists of each button */
const List = ({
  list,
  removeTodoListProp,
  finalizedTodoListProp,
  editTodoListProp,
}) => {
  /* Function to go through the lists and be able to render them */
  const renderedList = list?.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTodoItemProp={(e) => removeTodoListProp(item._id)}
      finalizedTodoListProp={(e) => finalizedTodoListProp(item._id)}
      editTodoItemProp={(updatedItem) =>
        editTodoListProp(item._id, updatedItem)
      }
      key={item.title}
    />
  ));
  return <div className="ui grid center aligned">{renderedList}</div>;
};

export default List;
