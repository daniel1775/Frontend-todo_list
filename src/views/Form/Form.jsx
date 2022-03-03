import React, { useState } from "react";
import swal from "sweetalert";
import style from "./Form.module.css";

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const showAlert=()=> {
        swal({
            title: "Tarea agregada",
            icon: "success",
            button: "Aceptar",
            timer: "4000"

        })
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("asdasdasd");

        if(inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false, deleted: false });
        setInputValue("");
    };
    
    return (
      <>
        <div className={style.container1}>
          <div className={style.containertask}>
            <h2 className={style.task}>TAREAS A REALIZAR</h2>
          </div>

          <div className={style.buttonadd}>
            
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
            </div>
          </div>
          <button onClick={()=> showAlert()} type="submit" className={style.add}>
            <i className="white plus icon"></i>AGREGAR
          </button>
        </form>
      </>
    );
};

export default Form;