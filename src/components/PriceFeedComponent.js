
// MultiPriceFeedComponent.jsx
import React, { useEffect, useState } from 'react';
import { Box, Text, Spinner, Heading, VStack } from '@chakra-ui/react';
import { ethers } from 'ethers';

const MultiPriceFeedComponent = ({ pair }) => {
  const [priceData, setPriceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Lista de contratos con sus direcciones y nombres
  const contractAddresses = [
    { name: 'ETH/USD', address: '0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43' },
    { name: 'BTC/USD', address: '0x1234567890abcdef1234567890abcdef12345678' }, // Reemplaza con la dirección real
    { name: 'LINK/USD', address: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef' }, // Reemplaza con la dirección real
    // Añade más pares aquí
  ];

  // ABI común para todos los contratos
  const aggregatorV3InterfaceABI = [
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'description',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint80', name: '_roundId', type: 'uint80' }],
      name: 'getRoundData',
      outputs: [
        { internalType: 'uint80', name: 'roundId', type: 'uint80' },
        { internalType: 'int256', name: 'answer', type: 'int256' },
        { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
        { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
        { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'latestRoundData',
      outputs: [
        { internalType: 'uint80', name: 'roundId', type: 'uint80' },
        { internalType: 'int256', name: 'answer', type: 'int256' },
        { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
        { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
        { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'version',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
  ];

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth_sepolia');

    async function fetchPrice() {
      setLoading(true);
      setError(null);

      // Buscar la dirección del contrato basado en el par recibido
      const contract = contractAddresses.find((c) => c.name === pair);

      if (!contract) {
        setError('Invalid pair name provided.');
        setLoading(false);
        return;
      }

      try {
        const priceFeed = new ethers.Contract(contract.address, aggregatorV3InterfaceABI, provider);
        const [roundData, decimals] = await Promise.all([
          priceFeed.latestRoundData(),
          priceFeed.decimals(),
        ]);
        const formattedPrice = ethers.utils.formatUnits(roundData.answer, decimals);
        setPriceData({ name: contract.name, price: formattedPrice });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching price:', err);
        setError('Failed to fetch price data.');
        setLoading(false);
      }
    }

    fetchPrice();
  }, [pair]);

  return (
    <Box textAlign="center" p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">Price for {pair}</Heading>
      {loading ? (
        <Spinner size="xl" />
      ) : error ? (
        <Text color="red.500">{error}</Text>
      ) : priceData ? (
        <VStack spacing={4} mt={4}>
          <Box>
            <Text fontSize="lg">{priceData.name}:</Text>
            <Text fontSize="2xl">${priceData.price}</Text>
          </Box>
        </VStack>
      ) : (
        <Text>No data available.</Text>
      )}
    </Box>
  );
};

export default MultiPriceFeedComponent;
