import React from 'react';
import { checkIsSelected } from './helpers';
import ProductCard from './ProductCard';
import { Product } from './types';

type Props = {
    products: Product[];
    SelectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList({products, SelectedProducts, onSelectProduct}: Props){
    return (
        <div className="orders-list-container">
            <div className="orders-list-items ">
                {/*<ProductCard/>*/}
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(SelectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;