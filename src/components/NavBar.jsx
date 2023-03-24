// Se deben importar los componentes de Chakra UI para poder renderizar el menu con sus opciones

import React from 'react';
import CartWidget from './CartWidget';
import { Button, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react';
import { Flex, Spacer, Box, Heading, Card } from '@chakra-ui/react';
import logo from '../assets/img/logo.jpg';

const NavBar = () => {

    return (
        <>
            {/* Se genera un NavBar con algunos estilos utilizando Chakra-UI */}
            <Box w='100%' m='1' color='white' borderRadius='md' bgGradient='linear(to-r, blackAlpha.900, blackAlpha.700)'>

                <Flex justify='center' align='center'>

                    <Card w='160px' p='2' m='3' bg='green.300'>
                        <Heading w='115px' m='5px'><img src={logo} alt="" /><Link to="/">Brand</Link></Heading>
                    </Card>
                    <Spacer />

                    <Box w='100%' p='2'>
                        <ul>
                            <Button p='6' m='15px' colorScheme='green'></Button>
                            <Menu>
                                <MenuButton p='6' m='15px' colorScheme='green' as={Button}>Productos</MenuButton>
                                <MenuList bg='green.300'>
                                    <MenuItem bg='green.300'><Link to="/category/1">Remeras</Link></MenuItem>
                                    <MenuItem bg='green.300'><Link to="/category/2">Gorras</Link></MenuItem>
                                    <MenuItem bg='green.300'><Link to="/category/3">Tazas</Link></MenuItem>
                                </MenuList>
                            </Menu>
                            <Button p='6' m='15px' colorScheme='green'>Sobre nosotros</Button>
                            <Button p='6' m='15px' colorScheme='green'>Contacto</Button>
                        </ul>
                    </Box>
                    <Spacer />

                    <Box w='70px' m='3' p='4' bg='green.300' borderRadius='md'>

                        <CartWidget />
                    </Box>

                </Flex>

            </Box>
        </>
    )
}

export default NavBar