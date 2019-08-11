// booksList.js
import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <li>
      <div>
        <div>
          <h3>{book.Name}</h3>
          <p>{book.Author}</p>
          <p>&pound;{book.Price}</p>
          <Link to={`/book/${book.GoogleId}`}>Show details</Link>
        </div>
      </div>
      <hr />
    </li>
  );
};

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.Items.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </ul>
  );
};

export default BooksList;
