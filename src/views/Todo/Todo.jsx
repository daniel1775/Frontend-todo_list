import React, { useState } from "react";
import style from "./Todo.module.css";

const Todo = ({ title, completed, removeTodoItemProp, finalizedTodoListProp, editTodoItemProp }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;

        if(key === 13) {
            editTodoItemProp({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        } else if(key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };

    /* const handleButtonClick = () => {
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({ completed: newState });
            console.log("Entra a finalizado");
            return newState;
        });
    }; */

    return (
        <div className={style.row}>
            {
            isEditing ?
                <div className={style.column_seven_wide}>
                    <div className="ui input fluid">
                        <input className={style.edit}
                            onChange={handleInputOnChange}
                            onKeyDown={handleInputKeyDown}
                            autoFocus={true}
                            value={tempValue}
                            placeholder="Editar tarea"
                        />
                        
                    </div>
                    
                </div> :
                <>
                <div className={style.row1}>
                
                <div className={style.rowcont}>
                    <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
                        <h2 className={"ui header" + (completedState ? " green" : "")}> {value}</h2>
                    </div>
                    <div className={style.button}>

                    <div className="column one wide">
                        <button
                            className={style.buti + (completedState ? " blue" : " green")}
                            onClick={() => finalizedTodoListProp()} 
                        >
                            <i className="white check icon"></i>
                        FINALIZADA</button>
                    </div>

                    <div className="column one wide">
                        <button
                            onClick={() => removeTodoItemProp()}
                            className={style.buti2}
                        >
                            <i className="white remove icon"></i>
                        ELIMINAR</button>
                    </div>
                    </div>
                    </div>
             </div>
                </>
            }
        </div>
    );
};

export default Todo;