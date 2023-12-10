import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Header from '../Header/Header';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    useEffect(() => {

        console.log('products', products);
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1 get id of the added product
        for (const id in storedCart) {
            // Step 2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity

                // step 4 : add the added product to the saved cart
                savedCart.push(addedProduct);

            }
            //Step no 3 get quantity of the product

            console.log('addedProduct', addedProduct);

        }
        // step 5 set the cart
        setCart(savedCart);
    }, [products]);



    const handleAddToCart = (product) => {
        // cart.push(product);
        let newCart = [];
        // const newCart = [...cart, product]
        // if product doesnot exist in the cart, then set quantity = 1

        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]

        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div>
            <Header></Header>
<div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </div>
        
    );
};

export default Shop;