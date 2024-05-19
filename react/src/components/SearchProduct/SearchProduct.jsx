import React, { useState } from 'react'

export default function SearchProduct({ searchProduct }) {
    const [ setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        searchProduct(e.target.value);
    }

  return (
    <>
        <form >
            <div>
                <input type="text" onChange={handleSearch} 
                
                placeholder="Search Product" aria-label="Search Product" aria-describedby="button-addon2"/>
            </div>
        </form>
    </>
  )
}
