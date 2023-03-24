import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    useEffect(() => {
        const mockItem = {
            id: 1,
            title: "Nombre del producto",
            description: "Descripción del producto",
            price: 50,
            pictureUrl: "../assets/img/remeras/1.jpg"
        };

        const fetchItem = new Promise((resolve) => {
            setTimeout(() => resolve(mockItem), 2000);
        });

        fetchItem.then((item) => setItem(item));
    }, []);

    return (
        <div>
            {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;