import React from 'react';
import {
    Box,
    HStack,
    useColorModeValue,
    SimpleGrid,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import {
    InputNumber,
    InputSelect,
    ButtonSubmit,
    InputText,
    Option
} from '../components/forms/InputData';

const Payments: Array<Option> = [
    { value: 0, label: 'DINHEIRO' },
    { value: 1, label: 'CREDITO' },
    { value: 2, label: 'DEBITO' }
];

function FormVenda() {
    return (
        <Box>
            <HStack>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputText
                        descLabel='Cliente'
                        columSpanBase={12}
                        columSpanMD={12}
                        columSpanLG={12}
                        read_on={true}
                    />
                </SimpleGrid>
            </HStack>

            <HStack mt={4}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputSelect
                        name='formaPagamento'
                        descLabel='Forma de pagamento'
                        columSpanBase={12}
                        columSpanMD={12}
                        columSpanLG={7}
                        options={Payments}
                    />
                    <InputNumber
                        descLabel='Valor recebido'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={3}
                    />
                    <InputNumber
                        descLabel='Valor desconto'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={2}
                    />
                </SimpleGrid>
            </HStack>

            <HStack mt={4}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputText
                        descLabel='Subtotal'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={2}
                        read_on={true}
                    />
                    <InputText
                        descLabel='Descontos'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={2}
                        read_on={true}
                    />
                    <InputText
                        descLabel='Troco'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={3}
                        read_on={true}
                    />
                    <InputText
                        descLabel='Total a pagar'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={5}
                        read_on={true}
                    />
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
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>Brigadeiro</Td>
                            <Td>1</Td>
                            <Td>R$ 6,00</Td>
                            <Td>R$ 2,00</Td>
                            <Td>R$ 4,00</Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>Copo da felicidade</Td>
                            <Td>10</Td>
                            <Td>R$ 5,00</Td>
                            <Td>R$ 0</Td>
                            <Td>R$ 5,00</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            <ButtonSubmit margin_top={5} />

        </Box>
    );
}

export default FormVenda;