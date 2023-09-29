"use client"
import React, { useState, useEffect } from 'react';
import { Box, Input, Text } from "@chakra-ui/react";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);

  useEffect(() => {
    const numbersArray = inputValue.split(/[ ,]+/).map(Number); // Tách chuỗi đầu vào thành một mảng các số
    const sortedArray = numbersArray.filter(number => !Number.isNaN(number)).sort((a, b) => b - a); // Loại bỏ các ký tự không phải số và sắp xếp mảng
    setSortedNumbers(sortedArray);
  }, [inputValue]);

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  return (
    <Box p={15}>
      <Text p={4}>Please Input Your Number</Text>
      <Input p={4} value={inputValue} onChange={handleInputChange} />
      <Text p={4} >Sorted Numbers Min to Max: {sortedNumbers.join(', ')}</Text>
      <Text p={4}>Sorted Numbers Max to Min: {sortedNumbers.reverse().join(', ')}</Text>
    </Box>
  );
}
