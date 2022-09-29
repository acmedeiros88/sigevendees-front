import React, { ReactNode } from 'react';
import {
    Box,
    Container,
    Heading,
    Flex,
    useColorModeValue
} from '@chakra-ui/react';
import Sidebar from './Sidebar';

function Template({ titulo, children }: { titulo: string; children: ReactNode }) {
    return (
        <Container maxW='full'>
            <Sidebar />
            <Box
                as='main'      
                pl={6}
                pr={6}
                pt='48px'
                minH="100vh"
                ml={{ base: 0, md: 60 }}
                bg={useColorModeValue('gray.50', 'gray.900')}>
                <Flex 
                    pb={2}
                    pt={4}
                    mb={4}
                    justifyContent='center'
                    borderBottomWidth='1px'>
                    <Heading as='h1'>{titulo}</Heading>
                </Flex>
                <Box>
                    {children}
                </Box>
            </Box>
        </Container>
    )
}

export default Template