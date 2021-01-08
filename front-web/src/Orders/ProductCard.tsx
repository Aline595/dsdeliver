import React from 'react';
import { formatPrice } from './helpers';
import { Product } from './types';
//import { ReactComponent as Pizza } from './pizza.svg';

type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}

function ProductCard({product, onSelectProduct, isSelected}: Props){
    return (
        <div 
            className={`orders-card-container ${isSelected ? 'selected': ''}`} 
            onClick={() => onSelectProduct(product)}
        >
            <h3 className="order-card-title ">
                {product.name}
            </h3>
            {/*<Pizza className="order-card-image" />*/}
            <img 
                src={product.imageUri}
                className="order-card-image"
                alt={product.name}
            ></img>
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;

