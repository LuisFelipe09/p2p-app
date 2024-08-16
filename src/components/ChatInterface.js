import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text, Spinner, Select } from '@chakra-ui/react';
import OpenAI from 'openai';
import { chatScript } from './ChatScript';

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY', // Reemplaza con tu clave API de OpenAI
  dangerouslyAllowBrowser: true
});

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSubmit = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = { role: 'user', content: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < chatScript.length) {
      // Obtener la siguiente pregunta del guion
      const nextQuestion = chatScript[nextQuestionIndex];
      setMessages((prevMessages) => [...prevMessages, nextQuestion]);
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Si el guion ha terminado, enviar a la API
      try {
        setLoading(true);

        const completion = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: messages,
        });

        const botMessage = {
          role: 'assistant',
          content: completion.choices[0].message.content,
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error fetching the API', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const currentQuestion = chatScript[currentQuestionIndex];

  return (
    <Box p={4} maxW="md" mx="auto" mt={10}>
      <VStack spacing={4} align="stretch">
        {messages.map((message, index) => (
          <Box
            key={index}
            bg={message.role === 'user' ? 'blue.100' : 'green.100'}
            p={3}
            borderRadius="md"
            alignSelf={message.role === 'user' ? 'flex-end' : 'flex-start'}
          >
            <Text>{message.content}</Text>
          </Box>
        ))}
        {loading && <Spinner />}
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={currentQuestion ? currentQuestion.content : 'Escribe tu mensaje...'}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>
          Enviar
        </Button>
      </VStack>
    </Box>
  );
};

export default ChatInterface;
