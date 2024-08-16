// App.js
import React from 'react';
import {
  Box,
  Text,
  VStack,
  Icon,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaRegThumbsUp, FaExchangeAlt, FaBullhorn, FaFileAlt, FaUser } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TradeList from './components/TradeList';
import PriceFeedComponent from './components/PriceFeedComponent';
import Menu from './components/Menu';
import ChatInterface from './components/ChatInterface';

const trades = [
  {
    name: 'CapitalGroupSPA',
    verified: true,
    trades: 95,
    effectiveness: 100.0,
    rating: 99.98,
    price: 1.001,
    available: 1600,
  },
  {
    name: 'Cambios JPGS',
    verified: true,
    trades: 70,
    effectiveness: 99.01,
    rating: 97.41,
    price: 1.02,
    available: 540,
  },
  {
    name: 'Inversiones INC',
    verified: false,
    trades: 280,
    effectiveness: 97.63,
    rating: 93.21,
    price: 1.04,
    available: 230,
  },
];

function App() {
  return (
    <Container maxW="md" p={0} bg="white">
      <Box bg="blue.800" color="white" p={4} textAlign="center">
        <Text fontSize="xl" fontWeight="bold">P2P</Text>
      </Box>
      <Router>
        <Routes>
          <Route path="/p2p" element={ <TradeList trades={trades} />} />
          <Route path="/chat" element={ <ChatInterface/> } />
          <Route path="/ofertar" element={ <PriceFeedComponent pair="ETH/USD" />} />
        </Routes>
        <Menu />
      </Router>
    </Container>
  );
}

export default App;

