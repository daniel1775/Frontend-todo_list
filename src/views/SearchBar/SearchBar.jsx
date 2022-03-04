import React from "react";
import style from "./SearchBar.module.css"

function SearchBar(props) {
  const { text, setText } = props; 

  const search = (e) => {
    setText(e.target.value);
  };

  return (
    <div >
      <div >
        <input 
        className={style.search}
          type={"text"}
          placeholder="Escribe aqui la tarea a filtrar..."
          value={text}
          onChange={search}
        ></input>
      </div>
    </div>
  );
}

export { SearchBar };
