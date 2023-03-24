import React, { useState, useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Item from './Item';

const ItemList = ({ items }) => {

    // const [items, setItems] = useState([]);

    useEffect(() => {
        const mockItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: '1',
                        title: 'Producto 1',
                        description: 'Descripción del producto 1',
                        price: 10.99,
                        pictureUrl: '../assets/img/remeras/1.jpg',
                    },
                    {
                        id: '2',
                        title: 'Producto 2',
                        description: 'Descripción del producto 2',
                        price: 20.99,
                        pictureUrl: '../assets/img/remeras/2.jpg',
                    },
                    {
                        id: '3',
                        title: 'Producto 3',
                        description: 'Descripción del producto 3',
                        price: 30.99,
                        pictureUrl: '../assets/img/remeras/3.jpg',
                    },
                ]);
            }, 2000);
        });

        mockItems.then((data) => {
            setItems(data);
        });
    }, []);

    return (
        <SimpleGrid columns={[1, 2, 3]} spacing="40px">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </SimpleGrid>
    )
}

export default ItemList