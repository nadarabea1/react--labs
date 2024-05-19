import React, { useState } from 'react';
import ProductList from '../ProductList/ProductList';
import Filter from '../Filter/Filter';
import SearchProduct from '../SearchProduct/SearchProduct';

export default function Product() {
    const [filterData, setFilterData] = useState('');
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');

    
    const handleDataFromProductList = (data) => {
        setFilterData(data)
    }

    const handleCategoryChange = (category) => {
        setCategory(category);
    }

    const handleSearchProduct = (search) => {
        setSearch(search);
    }

  return (
    <div>
      <div>
        <div>
          <h1 >Product List</h1>
        </div>
        <div>
          <Filter data={filterData} onCategoryChange={handleCategoryChange}/>
          <SearchProduct searchProduct={handleSearchProduct} />
        </div>
      </div> 
      <div>
        <div >
          <ProductList onDataToSend={handleDataFromProductList} category={category} search={search}/>
        </div>
      </div>
    </div>
  );
}
