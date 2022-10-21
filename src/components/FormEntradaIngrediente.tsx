import {
    Button,
    GridItem,
    HStack,
    SimpleGrid,
    useColorModeValue,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
    Td,
    Box,
    Icon
} from '@chakra-ui/react';
import {
    InputText,
    InputNumber,
    InputSelect,
    ButtonSubmit
} from '../components/forms/InputData';
import { FiTrash2, FiXSquare } from 'react-icons/fi';

interface itemProps {
    descricao: string;
    value: number;
};

const produtos: Array<itemProps> = [
    { descricao: 'Farinha', value: 0 },
    { descricao: 'Leite', value: 1 },
    { descricao: 'Chocolate', value: 2 }
];

function FormEntradaIngrediente() {
    return (
        <Box>

            <HStack mt={2}>
                <SimpleGrid columns={8} columnGap={3} rowGap={6} minW='full'>
                    <InputSelect
                        props={{
                            descLabel: 'Produto',
                            columSpanBase: 8,
                            columSpanMD: 8,
                            columSpanLG: 5
                        }}
                        options={produtos}
                    />
                    <InputNumber
                        descLabel='Quantidade'
                        columSpanBase={3}
                        columSpanMD={3}
                        columSpanLG={1}
                    />
                    <InputText
                        descLabel='Custo'
                        columSpanBase={3}
                        columSpanMD={3}
                        columSpanLG={1}
                        descPlaceholder='R$'
                    />
                    <GridItem mt={7} colSpan={{ base: 2, md: 2, lg: 1 }}>
                        <Button>Adicionar</Button>
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
                            <Th><Icon as={FiTrash2} /></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>Farinha</Td>
                            <Td>100g</Td>
                            <Td>R$ 10,00</Td>
                            <Td><Icon as={FiXSquare} /></Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>Leite</Td>
                            <Td>1000ml</Td>
                            <Td>R$ 2,50</Td>
                            <Td><Icon as={FiXSquare} /></Td>
                        </Tr>
                        <Tr>
                            <Td>3</Td>
                            <Td>Ovos</Td>
                            <Td>30und</Td>
                            <Td>R$ 15,00</Td>
                            <Td><Icon as={FiXSquare} /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            <ButtonSubmit margin_top={5} />

        </Box>
    );
};

export default FormEntradaIngrediente;