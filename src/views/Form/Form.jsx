import React, { useState } from "react";
import  style from  "./Form.module.css";

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };
    
    return (
      <>
        <div className={style.container1}>
          <div className={style.containertask}>
            <h2 className={style.task}>TAREAS A REALIZAR</h2>
          </div>

          <div className={style.buttonadd}>
            <button type="submit" className={style.add}>
              <i className="white plus icon"></i>AGREGAR
            </button>
          </div>
        </div>
        <form className="ui form" onSubmit={handleFormSubmit}>
          <div className="ui grid center aligned">
            <div className="row">
              <div className="column five wide">
                <input
                  className={style.input}
                  value={inputValue}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Escribe algo para hacer..."
                />
              </div>

              <div className="column one wide">
                <button type="submit" className="ui button circular icon green">
                  <i className="white plus icon"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
};

export default Form;