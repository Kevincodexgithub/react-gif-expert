import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);

    /**
     * ! Convierte a todos los elementos en minusculas
     */
    const listCategories = categories.map((categoria) =>
      categoria.toLowerCase()
    );

    if (listCategories.includes(newCategory.toLowerCase())) return;

    /**
     * ! Mayuscula la primera letra de cada palabra
     */
    const valor = newCategory.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
      letra.toUpperCase()
    );

    setCategories([valor, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
