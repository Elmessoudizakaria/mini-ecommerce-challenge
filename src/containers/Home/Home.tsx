import React, { useState, useEffect } from 'react';
import { Product } from '../../shared/models';
import { useCart } from '../../shared/context/cartContext';
import ProductDetailModal from '../../components/ProductDetail/ProductDetailModal';
import './Home.css';

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productLoadFailed, setProductLoadFailed] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const { addToCart, itemExist, removeFromCart } = useCart();

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(undefined);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        setProductLoadFailed(true);
      });
  }, []);

  return (
    <div>
      <div className="product-header">
        <h4> {`${products.length} Items found`}</h4>
      </div>
      {productLoadFailed && (
        <h3 className="error-loading-header">Error Loading Products !!!</h3>
      )}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-container">
            <div onClick={() => openModal(product)} className="product">
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <h2 title={product.title}>
                  {product.title.substring(0, 25)}
                  {product.title.length > 25 && '...'}
                </h2>
                <p>${product.price}</p>
              </div>
            </div>
            {!itemExist(product.id) ? (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            ) : (
              <button
                className="button-disabled"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from Cart
              </button>
            )}
          </div>
        ))}
      </div>
      {selectedProduct != undefined && (
        <ProductDetailModal
          isOpen={selectedProduct !== undefined}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};
