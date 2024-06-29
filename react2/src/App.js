import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ProductContextProvider } from './components/ContextAPI/ProductContext';
import Products from './components/Products/Products';
import Products2 from './components/Redux/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductDetails2 from './components/Redux/ProductDetails/ProductDetails';
import EditProduct from './components/EditProduct/EditProduct';
import EditProduct2 from './components/Redux/EditProduct/EditProduct';
import CreateProduct from './components/CreateProduct/CreateProduct';
import CreateProduct2 from './components/Redux/CreateProduct/CreateProduct';

function App() {
  return (
    <div >
      <ProductContextProvider> 
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
                <Route path="/" />
                <Route path="/products" element={<Products/>} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products/:id/edit" element={<EditProduct />} />
                <Route path="/create" element={<CreateProduct />} />

                {/* redux */}
                <Route path="/redux/products" element={<Products2/>} />
                <Route path="/redux/products/:id" element={<ProductDetails2 />} />
                <Route path="/redux/create" element={<CreateProduct2 />} />
                <Route path="/redux/products/:id/edit" element={<EditProduct2 />} />
                

                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </ProductContextProvider>
    </div>
  );
}

export default App;
