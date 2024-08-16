import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  HStack,
  Divider,
  Icon,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';

const TradeList = ({ trades }) => {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
    <TabList justifyContent="center" bg="green.200">
      <Tab>Comprar</Tab>
      <Tab>Vender</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <VStack spacing={4} divider={<Divider />} align="stretch" p={4}>
          {trades.map((trade, index) => (
            <Flex key={index} alignItems="center" justifyContent="space-between">
              <Box flex="1">
                <Text fontSize="lg" fontWeight="bold">
                  {trade.name} {trade.verified && <Text as="span" color="green.400">✔</Text>}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Trade(s) {trade.trades} | Efectividad {trade.effectiveness.toFixed(2)}%
                </Text>
                <HStack color="gray.500">
                  <Icon as={FaRegThumbsUp} />
                  <Text>{trade.rating}%</Text>
                </HStack>
                <Text fontSize="2xl" color="blue.800" fontWeight="bold">USD$ {trade.price.toFixed(3)}</Text>
                <Text fontSize="sm" color="gray.600">Cantidad Disp: {trade.available} USDT</Text>
              </Box>
              <Button colorScheme="green">Comprar</Button>
            </Flex>
          ))}
        </VStack>
      </TabPanel>

     
      <TabPanel>
      <VStack spacing={4} divider={<Divider />} align="stretch" p={4}>
          {trades.map((trade, index) => (
            <Flex key={index} alignItems="center" justifyContent="space-between">
              <Box flex="1">
                <Text fontSize="lg" fontWeight="bold">
                  {trade.name} {trade.verified && <Text as="span" color="green.400">✔</Text>}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Trade(s) {trade.trades} | Efectividad {trade.effectiveness.toFixed(2)}%
                </Text>
                <HStack color="gray.500">
                  <Icon as={FaRegThumbsUp} />
                  <Text>{trade.rating}%</Text>
                </HStack>
                <Text fontSize="2xl" color="blue.800" fontWeight="bold">USD$ {trade.price.toFixed(3)}</Text>
                <Text fontSize="sm" color="gray.600">Cantidad Disp: {trade.available} USDT</Text>
              </Box>
              <Button colorScheme="red">Vender</Button>
            </Flex>
          ))}
        </VStack>
      </TabPanel>
    </TabPanels>
  </Tabs>
  );
};

export default TradeList;
