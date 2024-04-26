import React from "react";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
  };

  return (
    <header className="header-container">
      <h2 className="header__title">Search it. Explore it. Buy it.</h2>
      <form onSubmit={handleSubmit} className="header__form">
        <input
          type="text"
          className="header__search"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        />
        <button type="submit" className="header__submit-btn">
          Submit
        </button>
      </form>
    </header>
  );
};

export default Search;
