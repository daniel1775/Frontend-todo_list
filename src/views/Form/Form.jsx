/* Import of the React module in the useState function to modify the states */
import React, { useState } from "react";
/* Import of the sweetalert module in the function to add the added task alert*/
import swal from "sweetalert";
/* Impor component styles */
import style from "./Form.module.css";

/* Arrow function to define main functions */
const Form = ({ addTodo, setDeleted, setFinalized, setAll }) => {
  const [inputValue, setInputValue] = useState("");

  /* Functionality to the alert to add tasks */
  const showAlert = () => {
    swal({
      title: "Tarea agregada",
      icon: "success",
      button: "Aceptar",
      timer: "4000",
    });
  };

  /* Function to change the state of the input value*/
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  /* Function to reset the state of the input value*/
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    addTodo({ title: inputValue, completed: false, deleted: false });
    setInputValue("");
  };

  return (
    <>
      {/* Render and add styles to buttons*/}
      <div className={style.container1}>
        <div className={style.view_buttons} action="">
          {/* view deleted button*/}
          <button
            onClick={() => setDeleted(true)}
            className={style.button_view}
          >
            Ver Eliminados
            {/* view earrings button*/}
          </button>
          <button onClick={() => setAll(true)} className={style.button_view}>
            Ver Pendientes
          </button>
          {/* view finished button*/}
          <button
            onClick={() => setFinalized(true)}
            className={style.button_view}
          >
            Ver Finalizados
          </button>
        </div>
        {/* Add Input with its default state*/}
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
            {/* Add task button with its styles and its alert*/}
          </div>
          <div className={style.buttonadd}>
            <button
              onClick={() => showAlert()}
              type="submit"
              className={style.add}
            >
              <i className="white plus icon"></i>AGREGAR
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;