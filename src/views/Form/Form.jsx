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

        if(inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };
    
    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter something to do..."
                        />
                    </div>
                    
                    <div className="column one wide">
                        <button onClick={()=> showAlert()} type="submit" className={style.alert }><i className="white plus icon"></i>AGREGAR</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;