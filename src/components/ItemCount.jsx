import { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count);
    };

    return (
        <Flex align="center" justify="center">
            <Button onClick={handleDecrement} m='3' bg='green.300' colorScheme='green' color='white' borderRadius='md'>-</Button>
            <Text>{count}</Text>
            <Button onClick={handleAdd} m='3' bg='green.300' colorScheme='green' color='white' borderRadius='md'>Agregar al carrito</Button>
            <Button onClick={handleIncrement} m='3' bg='green.300' colorScheme='green' color='white' borderRadius='md'>+</Button>
            
        </Flex>
    )
}

export default ItemCount