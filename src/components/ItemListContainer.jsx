import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {

    return (
        <Container maxw='container.lg'>
            <h2>{greeting}</h2>
            <ItemList />
        </Container>
    )
}

export default ItemListContainer