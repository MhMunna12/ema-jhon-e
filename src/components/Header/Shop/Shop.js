import React from 'react';
import fakeData from '../../fakeData'
import {useState} from 'react'
import './Shop.css'
import Product from '../../Product/Product';
import Card from '../../Card/Card';
const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([])
    
 

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        console.log('clicked',product);
        setCart(newCart);
    }
      console.log(first10)
    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd}></Product>)
            }
            </div>
            <div className='cart-container'>
                    <Card cart={cart}></Card>
            </div>
            
        </div>
    );
};

export default Shop;