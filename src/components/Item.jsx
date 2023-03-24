import React from "react";
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const Item = ({ item }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={item.pictureUrl} alt={item.title} />
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Heading as="h4" size="md" mr="2">
                        {item.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                        ${item.price}
                    </Text>
                </Box>
                <Text mt="2" color="gray.500" fontSize="sm">
                    {item.description}
                </Text>
            </Box>
        </Box>
    );
};

export default Item;