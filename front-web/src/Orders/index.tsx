/*
const handleSelectProduct = (product: Product) => {
  const isAlreadySelected = selectedProducts.some(item => item.id === product.id);

  if (isAlreadySelected) {
    const selected = selectedProducts.filter(item => item.id !== product.id);
    setSelectedProducts(selected);
  } else {
    setSelectedProducts(previous => [...previous, product]);
  }
}

const handleSubmit = () => {
  const productsIds = selectedProducts.map(({ id }) => ({ id }));
  const payload = {
    ...orderLocation!,
    products: productsIds
  }

  saveOrder(payload).then(() => {
    toast.error('Pedido enviado com sucesso!');
    setSelectedProducts([]);
  })
    .catch(() => {
      toast.warning('Erro ao enviar pedido');
    })
}

*/

import React, { useEffect, useState } from 'react';

import "./styles.css";

import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders(){
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

  useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader/>
      <ProductsList products={products}/>
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  )
}

export default Orders;