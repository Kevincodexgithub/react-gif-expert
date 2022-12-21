import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputvalue, setInputvalue] = useState("");

  const onInputChange = ({ target }) => {
    setInputvalue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const valor = inputvalue.trim();
    if (valor.length <= 1) return;
    // setCategories((categories) => [inputvalue, ...categories]);
    onNewCategory(valor);
    setInputvalue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputvalue}
        onChange={onInputChange}
      />
    </form>
  );
};
