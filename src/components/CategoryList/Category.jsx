import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Category = () => {
    const [products, setProducts] = useState([]);
    const category = useParams();
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
                const data = await response.json();
                const needProducts=data.filter((product)=>{if(product.category === category.name) return product})
                setProducts(needProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [category.name]);

    //     const needProducts = products.filter(product => product.category === category);

    // console.log(category);



    console.log('products', products, category);
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

            // console.log('addedProduct', addedProduct);

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
        <>
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
        </>
    );
};

export default Category;