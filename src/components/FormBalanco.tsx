import React from 'react';
import {
    Box,
    HStack,
    SimpleGrid,
    useColorModeValue,
    Table,
    TableContainer,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    Td,
    Button,
    GridItem,
    Flex
} from '@chakra-ui/react';
import {
    InputDate
} from '../components/forms/InputData';

function FormBalanco() {
    return (
        <Box>
            <HStack>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputDate
                        descLabel=''
                        descPlaceholder='Selecione data inicial'
                        columSpanBase={4}
                        columSpanMD={4}
                        columSpanLG={3}
                    />
                    <Text fontSize='3xl' mt={1} justifySelf='center'>à</Text>
                    <InputDate
                        descLabel=''
                        descPlaceholder='Selecione data final'
                        columSpanBase={4}
                        columSpanMD={4}
                        columSpanLG={3}
                    />
                </SimpleGrid>
            </HStack>

            <Flex mt={4} ml={20} w='100%'>
                <Button w='41%'>Buscar</Button>
            </Flex>


            <Text fontSize='xl' mt={6}>Vendas</Text>
            <TableContainer overflowY='auto' mt={3}>
                <Table variant='striped' bgColor={useColorModeValue('blackalpha.300', 'blackalpha.700')}>
                    <Thead>
                        <Tr>
                            <Th>Quantidade</Th>
                            <Th>Valor toal</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>{'100'}</Td>
                            <Td>{'R$ 100,00'}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            <Text fontSize='xl' mt={6}>Custos</Text>
            <TableContainer overflowY='auto' mt={3}>
                <Table variant='striped' bgColor={useColorModeValue('blackalpha.300', 'blackalpha.700')}>
                    <Thead>
                        <Tr>
                            <Th>Valor toal</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>{'R$ 100,00'}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

        </Box>
    );
}

export default FormBalanco;