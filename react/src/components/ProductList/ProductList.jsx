import React, { useEffect, useState } from 'react';
import useFetch from '../useFetch/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function ProductList({ onDataToSend, category, search }) {
  const [data, loading] = useFetch('https://fakestoreapi.com/products');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!loading) {
      if (category) {
        setFilteredData(data.filter((item) => item.category === category));
        onDataToSend(filteredData);
      } else if (search) {
        setFilteredData(data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())));
        onDataToSend(filteredData);
      }
      onDataToSend(data);
    }
  }, [data, loading, onDataToSend, category, search]);

  return (
    <div>
      {loading ? (
        <div>
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        </div>
      ) : (
        <div>
          {filteredData.length > 0 ? (
            filteredData.map((product) => (
              <div key={product.id} >
                <div >
                  <img src={product.image}  alt={product.title} style={{ maxWidth: "150px" }} />
                  <div >
                    <h5 >{product.title}</h5>
                    <p >{product.description}</p>
                  </div>
                  <div >
                    <p >${product.price}</p>
                    <button >Add to Cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            data.map((product) => (
              <div key={product.id} >
                <div >
                  <img src={product.image} alt={product.title} style={{ maxWidth: "150px" }} />
                  <div >
                    <h5>{product.title}</h5>
                    <p >{product.description}</p>
                  </div>
                  <div >
                    <p >${product.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
