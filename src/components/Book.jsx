import React from "react";

export default function Book({ book, addToCart }) {
  return (
    <li
      onClick={() => {
        console.log("I've been clicked!", book);

        addToCart(book.id);
      }}
    >
      {book.title}
    </li>
  );
}
