import React, { useState } from "react";
import axios from "axios";

import BookSearchForm from "../components/bookSearchForm";
import Loader from "../components/loader";
import BooksList from "../components/bookList";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ Items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = `https://192.168.1.17:5001/api/books`;

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?Name=${searchTerm}`);
      setBooks(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <>
      <BookSearchForm
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
        error={error}
      />
      <Loader searchTerm={searchTerm} loading={loading} />
      <BooksList books={books} />
    </>
  );
};

export default SearchPage;
