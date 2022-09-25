import React, { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar'

function Container({ titulo, children }: { titulo: string; children: ReactNode }) {
    return (
        <>
            <Sidebar />
            <Box ml={{ base: 0, md: 60 }}>
                <Flex justifyContent='center'>
                    <h1>{titulo}</h1>
                        {children}
                </Flex>
            </Box>
        </>
    )
}

export default Container