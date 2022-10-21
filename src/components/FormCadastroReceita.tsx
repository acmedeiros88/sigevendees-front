import {
    Box,
    Button,
    GridItem,
    HStack,
    SimpleGrid,
    useColorModeValue,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Icon
} from "@chakra-ui/react";
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

const tiposReceita: Array<itemProps> = [
    { descricao: 'DOCE', value: 0 },
    { descricao: 'SALGADO', value: 1 }
];

const undsMedidaAvenda: Array<itemProps> = [
    { descricao: 'UND', value: 0 },
    { descricao: 'CENTO', value: 1 }
];

const produtos: Array<itemProps> = [
    { descricao: 'Farinha', value: 0 },
    { descricao: 'Leite', value: 1 },
    { descricao: 'Pote 250ml', value: 2 }
];

function FormCadastroReceita() {
    return (
        <Box>

            <HStack>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputText
                        descLabel='Descrição'
                        columSpanBase={12}
                        columSpanMD={12}
                        columSpanLG={12}
                    />
                </SimpleGrid>
            </HStack>

            <HStack mt={4}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputSelect
                        props={{
                            descLabel: 'Tipo',
                            columSpanBase: 12,
                            columSpanMD: 12,
                            columSpanLG: 3
                        }}
                        options={tiposReceita}
                    />

                    <InputSelect
                        props={{
                            descLabel: 'Venda em',
                            columSpanBase: 6,
                            columSpanMD: 6,
                            columSpanLG: 3
                        }}
                        options={undsMedidaAvenda}
                    />

                    <InputNumber
                        descLabel='Rendimento'
                        descPlaceholder="UND"
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={2}
                    />

                    <InputNumber
                        descLabel='Tempo preparo'
                        descPlaceholder='minutos'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={2}
                    />

                    <InputNumber
                        descLabel='Preço'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={2}
                    />
                </SimpleGrid>
            </HStack>

            <HStack mt={4}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputSelect
                        props={{
                            descLabel: 'Ingrediente/Embalagen',
                            columSpanBase: 12,
                            columSpanMD: 12,
                            columSpanLG: 8
                        }}
                        options={produtos}
                    />

                    <InputNumber
                        descLabel='Quantidade'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={2}
                    />

                    <GridItem mt={7} colSpan={{ base: 6, md: 6, lg: 2 }}>
                        <Button>Adicionar</Button>
                    </GridItem>
                </SimpleGrid>
            </HStack>

            <TableContainer overflowY='auto' mt={6}>
                <Table size='sm' variant='striped' bgColor={useColorModeValue('blackalpha.300', 'blackalpha.700')}>
                    <Thead>
                        <Tr>
                            <Th>Código</Th>
                            <Th>Produto</Th>
                            <Th>Qtd</Th>
                            <Th><Icon as={FiTrash2} /></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>Farinha</Td>
                            <Td>100g</Td>
                            <Td><Icon as={FiXSquare} /></Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>Leite</Td>
                            <Td>1000ml</Td>
                            <Td><Icon as={FiXSquare} /></Td>
                        </Tr>
                        <Tr>
                            <Td>3</Td>
                            <Td>Ovos</Td>
                            <Td>30und</Td>
                            <Td><Icon as={FiXSquare} /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            <HStack mt={6}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputText
                        descLabel='Custo'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={3}
                        read_on={true}
                    />

                    <InputText
                        descLabel='Custo fixo'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={3}
                        read_on={true}
                    />

                    <InputText
                        descLabel='Custos total'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={3}
                        read_on={true}
                    />

                    <InputText
                        descLabel='Lucro'
                        descPlaceholder='R$'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={3}
                        read_on={true}
                    />
                </SimpleGrid>
            </HStack>

            <ButtonSubmit margin_top={5} />

        </Box>
    );
};

export default FormCadastroReceita;