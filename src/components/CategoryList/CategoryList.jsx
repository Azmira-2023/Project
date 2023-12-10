import { React, useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
                const data = await response.json();

                // Assuming the JSON structure contains an array of products with a "category" field
                const uniqueCategories = [...new Set(data.map(product => product.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    console.log(categories);


    return (
        <NavDropdown title="Category" id="basic-nav-dropdown">
            {
                categories.map(category => (
                    <NavDropdown.Item as={Link} to={`/category/${category}`}>{category}</NavDropdown.Item>

                ))
            }

        </NavDropdown>

    );


};

export default CategoryList;
