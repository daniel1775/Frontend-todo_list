/* the React module is called with the UseState property to add the states in the functions*/
import React, { useEffect,useState } from "react";
/* import aweetalert module to add an alert window when a task is added */
import swal from "sweetalert";
/* The styles module is called */
import style from "./Form.module.css";

import { SearchBar } from "../SearchBar/SearchBar";


/* The addTodo function is created that will change state */
const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  /* The showAlert function is created that will display a message when adding a new task */
  const showAlert = () => {
    swal({
      title: "Tarea agregada",
      icon: "success",
      button: "Aceptar",
      timer: "4000",
    });
  };

  /* The handlePutChange function is created that will change the state of the input value*/
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  /* The function handleFormSubmit is created, it will change the state of the input to the default state when it is not being used.*/
  const handleFormSubmit = (e) => {
    e.preventDefault();
    /* trim() removes whitespace from both sides of a string:*/
    if (inputValue.trim() === "") return;

    addTodo({ title: inputValue, completed: false });
    setInputValue("");
  };

    const baseUrl = "https://backend-tamba-flowers.herokuapp.com";
    const [text, setText] = useState("");
    let searchCharacters = [];

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});

    const consumeApi = async (url) => {
      const obj = await fetch(url); //guarde los datos de la api
      const data = await obj.json(); //conviertalos a formato json y guardelos en data
      setCharacters(data.results); //consuma el api desde results
      setInfo(data.info);
    };

    

      useEffect(() => {
        consumeApi(baseUrl);
      }, []);

  if (characters.length >= 1) {
    searchCharacters = characters.filter((character) => {
      const characterText = character.name.toLowerCase();
      const searchText = text.toLowerCase();
      return characterText.includes(searchText);
    });
  } else {
    searchCharacters = characters;
  }
  console.log(searchCharacters);

  return (
    <>
      <SearchBar
        text={text}
        setText={setText}
        prev={info.prev}
        next={info.next}
      />
      {/*calling styles for container1 */}
      <div className={style.container1}>
        <div className={style.containertask}>
          {/*the title TAREAS A REALIZAR  is printed on the screen */}
          <h2 className={style.task}>TAREAS A REALIZAR</h2>
        </div>
      </div>
      {/*the form is implemented so that the input works with the button */}
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="ui grid center aligned">
          <div className="row">
            <div className="column five wide">
              {/*calling styles for input */}
              {/*input state change*/}
              <input
                className={style.input}
                value={inputValue}
                onChange={handleInputChange}
                type="text"
                placeholder="Escribe aquí algo para hacer..."
              />
            </div>
          </div>
          {/*the button to add tasks with its style and alert is printed on the screen*/}
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
