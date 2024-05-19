import React, { useState } from 'react';

export default function Filter({ data, onCategoryChange }) {
  const [setCategory] = useState('');
  const uniqueCategories = data ? [...new Set(data.map((item) => item.category))] : [];

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    onCategoryChange(e.target.value);
  };

  return (
    <>
      <form action="">
        <select
          name="category"
          id="category"
          onChange={handleCategoryChange}
          aria-label=".form-select example"
        >
          {data ? (
            uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))
          ) : (
            <option value="0">Loading...</option>
          )}
        </select>
      </form>
    </>
  );
}
