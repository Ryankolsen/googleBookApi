import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const FavoriteBooks = () => {
  const favoriteBooks = useAppSelector(FavoriteBooks);
  console.log(favoriteBooks);

  return <div>FavoriteBooks</div>;
};
