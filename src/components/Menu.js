import React from 'react';
import { Box, SimpleGrid, VStack, Icon, Text } from '@chakra-ui/react';
import { FaExchangeAlt, FaBullhorn, FaFileAlt, FaUser, FaRocketchat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Box bg="blue.800" py={4}>
      <SimpleGrid columns={4} spacing={4} px={6}>
        <VStack spacing={1} color="white">
          <Link to="/p2p">
            <Icon as={FaExchangeAlt} w={6} h={6} />
            <Text fontSize="sm">P2P</Text>
          </Link>
        </VStack>
        <VStack spacing={1} color="white">
          <Link to="/ofertar">
            <Icon as={FaBullhorn} w={6} h={6} />
            <Text fontSize="sm">Ofertar</Text>
          </Link>
        </VStack>
        <VStack spacing={1} color="white">
          <Link to="/ordenes">
            <Icon as={FaFileAlt} w={6} h={6} />
            <Text fontSize="sm">Ordenes</Text>
          </Link>
        </VStack>
        <VStack spacing={1} color="white">
          <Link to="/chat">
            <Icon as={FaRocketchat} w={6} h={6} />
            <Text fontSize="sm">chat</Text>
          </Link>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Menu;
