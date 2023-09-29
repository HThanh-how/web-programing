import Image from 'next/image'
import {Box, Heading} from '@chakra-ui/react'
import Sort from '@/components/Sort'
export default function Home() {
  return (
    // <Sort/>
    <Box w="90vw" h="80vh" bgGradient='linear(to-l, #7928CA, #FF0080)' p="100px">
              <title>Lab 1.2</title>
        <Box  w="30vw" h="50vh" bgGradient='linear(to-l, red, yellow)' p="100px">
            <Heading color={"white"} size={"xl"}>Web Programing</Heading>

        </Box>
    </Box>
  )
}
