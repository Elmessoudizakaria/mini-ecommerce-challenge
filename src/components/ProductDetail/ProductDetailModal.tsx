import React, { FC } from 'react';
import './ProductDetailModal.css';
import { Product } from '../../shared/models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  product: Product;
}
const ProductDetailModal: FC<Props> = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <img
          className="modal-detail-img"
          src={product.image}
          alt={product.title}
        />
        <h2>{product.title}</h2>
        <p className="modal-content-description">{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetailModal;
