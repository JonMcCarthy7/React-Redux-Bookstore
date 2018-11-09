import React from "react";

export default function CartItem({ book }) {
  return (
    <div>
      <li>Title: {book.title}</li>
    </div>
  );
}
