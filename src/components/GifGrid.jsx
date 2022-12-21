import React, { useEffect, useState } from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItems } from "./GifItems";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h1>{category}</h1>
      {isLoading && <h2>Cargando ...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItems key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
