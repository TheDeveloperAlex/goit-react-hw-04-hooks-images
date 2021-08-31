import React, { useState } from "react";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [name, setName] = useState('');
  


  const onHandleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setName(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      toast.error("Error, please enter text ");
      return;
    }
    onSubmit(name);
    document.getElementById("input").value = "";
    setName("");
  };

  return (
    <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={onHandleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            onChange={onHandleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            id="input"
          />
        </form>
    </header>
  )
} ;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}