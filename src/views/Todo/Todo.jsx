/* Import of the React module in the useState function to modify the states */
import React, { useState } from "react";
/* Import component styles */
import style from "./Todo.module.css";

/* Function to change the state of the different lists depending on the actions of the declared constants */
const Todo = ({ title, completed, removeTodoItemProp, finalizedTodoListProp, editTodoItemProp }) => {
  /* Constant declared for state change in edit function */
  const [isEditing, setIsEditing] = useState(false);
  /* Constant declared for state change of the title of the requested list */
  const [value, setValue] = useState(title);
  /* Constant declared for state change of the title of the requested list */
  const [tempValue, setTempValue] = useState(title);

  /* Check state change function */
  const [check, setCheck] = useState(false);
  const [completedState] = useState(completed);

  /* edit task function */
  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

  /* esc and enter key functionality */
  const handleInputKeyDown = (e) => {
    const key = e.keyCode;

    if (key === 13) {
      editTodoItemProp({ title: tempValue });
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  /* Function to change the state of the value of Temp/value */
  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  return (
    <div className={style.row}>
      {/* Render functionality to edit*/}
      {isEditing ? (
        <div className={style.column_seven_wide}>
          <div className="ui input fluid">
            <input
              className={style.edit}
              onChange={handleInputOnChange}
              onKeyDown={handleInputKeyDown}
              autoFocus={true}
              value={tempValue}
              placeholder="Editar tarea"
            />
          </div>
        </div>
      ) : (
        <>
          <div
            className={`${style.row1} ${
              check ? style.row1_changed : style.row1_normal
            }`}
          >
            {/* Render functionality and botton to check*/}
            {console.log(typeof check)}
            <input
              checked={check}
              className={style.check}
              onClick={() => setCheck(!check)}
              value={check}
              type="checkbox"
            />

            <div className={style.rowcont}>
              <div
                className="column five wide"
                onDoubleClick={handleDivDoubleClick}
              >
                <h2 className={"ui header" + (completedState ? " green" : "")}>
                  {" "}
                  {value}
                </h2>
              </div>
              <div className={style.button}>
                <div className="column one wide">
                  <button
                    className={
                      style.buti + (completedState ? " blue" : " green")
                    }
                    onClick={() => finalizedTodoListProp()}
                  >
                    <i className="white check icon"></i>
                    FINALIZADA
                  </button>
                </div>

                <div className="column one wide">
                  <button
                    onClick={() => removeTodoItemProp()}
                    className={style.buti2}
                  >
                    <i className="white remove icon"></i>
                    ELIMINAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;