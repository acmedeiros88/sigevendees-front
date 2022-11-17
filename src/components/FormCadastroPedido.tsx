import React from 'react';
import {
    useColorModeValue,
    Box,
    Button,
    GridItem,
    HStack,
    Icon,
    SimpleGrid,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Tfoot,
    Input
} from '@chakra-ui/react';
import { FiTrash2, FiXSquare } from 'react-icons/fi';
import {
    InputNumber,
    InputSelect,
    ButtonSubmit,
    InputText,
    Option,
    InputDate
} from '../components/forms/InputData';

const produtos: Array<Option> = [
    { value: 0, label: 'Bolo chocolate' },
    { value: 1, label: 'Brigadeiro' },
    { value: 2, label: 'Copo da felicidade' }
];

function FormCadastroPedido() {
    return (
        <Box>

            <HStack>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputText
                        descLabel='Cliente'
                        descPlaceholder='Digite o nome ou telefone'
                        columSpanBase={8}
                        columSpanMD={8}
                        columSpanLG={10}
                    />
                    <InputDate
                        descLabel='Entrega'
                        descPlaceholder='Selecione data de entrega'
                        columSpanBase={4}
                        columSpanMD={4}
                        columSpanLG={2}
                    />
                </SimpleGrid>
            </HStack>

            <HStack mt={4}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputSelect
                        name='produtoPedido'
                        descLabel='Produto'
                        descPlaceholder='Digite o código ou o nome'
                        columSpanBase={12}
                        columSpanMD={12}
                        columSpanLG={12}
                        options={produtos}
                    />
                </SimpleGrid>
            </HStack>

            <HStack mt={4}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputNumber
                        descLabel='Quantidade'
                        columSpanBase={3}
                        columSpanMD={3}
                        columSpanLG={2}
                    />
                    <InputText
                        descLabel='Valor unitario'
                        descPlaceholder='R$'
                        columSpanBase={3}
                        columSpanMD={3}
                        columSpanLG={3}
                        read_on={true}
                    />
                    <InputNumber
                        descLabel='Desconto'
                        descPlaceholder='R$'
                        columSpanBase={3}
                        columSpanMD={3}
                        columSpanLG={2}
                    />
                    <InputText
                        descLabel='Total'
                        descPlaceholder='R$'
                        columSpanBase={3}
                        columSpanMD={3}
                        columSpanLG={3}
                        read_on={true}
                    />
                    <GridItem mt={{ lg: 7 }} colSpan={{ base: 12, md: 12, lg: 2 }}>
                        <Button width={{ base: '100%', md: '100%' }}>Adicionar</Button>
                    </GridItem>
                </SimpleGrid>
            </HStack>

            <TableContainer overflowY='auto' mt={8}>
                <Table size='sm' variant='striped' bgColor={useColorModeValue('blackalpha.300', 'blackalpha.700')}>
                    <Thead>
                        <Tr>
                            <Th>Código</Th>
                            <Th>Produto</Th>
                            <Th>Qtd</Th>
                            <Th>Custo R$</Th>
                            <Th>Desconto R$</Th>
                            <Th>Subtotal R$</Th>
                            <Th><Icon as={FiTrash2} /></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>Bolo chocolate</Td>
                            <Td>5</Td>
                            <Td>R$ 18,00</Td>
                            <Td>R$ 0</Td>
                            <Td>R$ 90,00</Td>
                            <Td><Icon as={FiXSquare} /></Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>Brigadeiro</Td>
                            <Td>1</Td>
                            <Td>R$ 6,00</Td>
                            <Td>R$ 2,00</Td>
                            <Td>R$ 4,00</Td>
                            <Td><Icon as={FiXSquare} /></Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>Copo da felicidade</Td>
                            <Td>10</Td>
                            <Td>R$ 5,00</Td>
                            <Td>R$ 0</Td>
                            <Td>R$ 5,00</Td>
                            <Td><Icon as={FiXSquare} /></Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th>TOTAL DO PEDIDO</Th>
                            <Th><Input readOnly value='R$ 99,00' w='50%' /></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>

            <ButtonSubmit margin_top={5} />

        </Box>
    );
}

export default FormCadastroPedido;