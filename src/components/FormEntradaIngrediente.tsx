import {
    Button,
    FormControl,
    FormLabel,
    GridItem,
    HStack,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    SimpleGrid,
    useColorModeValue,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
    Td,
    Flex,
    Box
} from "@chakra-ui/react";

function FormEntradaIngrediente() {
    return (
        <Box>
            <HStack mt={12} alignItems='flex-start'>
                <SimpleGrid columns={8} columnGap={3} rowGap={6}>
                    <GridItem colSpan={{ base: 8, md: 8, lg: 5 }}>
                        <FormControl>
                            <FormLabel fontSize='sm' whiteSpace='nowrap'>Produto</FormLabel>
                            <Select placeholder='Selecionar...'>
                                <option>Farinha</option>
                                <option>Leite</option>
                                <option>Chocolate</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 3, md: 3, lg: 1 }}>
                        <FormControl>
                            <FormLabel fontSize='sm' whiteSpace='nowrap'>Quantidade</FormLabel>
                            <NumberInput min={1}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 3, md: 3, lg: 1 }}>
                        <FormControl>
                            <FormLabel fontSize='sm' whiteSpace='nowrap'>Custo</FormLabel>
                            <Input placeholder='R$' />
                        </FormControl>
                    </GridItem>
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
                            <Th>X</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>Farinha</Td>
                            <Td>100g</Td>
                            <Td>R$ 10,00</Td>
                            <Td>x</Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>Leite</Td>
                            <Td>1000ml</Td>
                            <Td>R$ 2,50</Td>
                            <Td>x</Td>
                        </Tr>
                        <Tr>
                            <Td>3</Td>
                            <Td>Ovos</Td>
                            <Td>30und</Td>
                            <Td>R$ 15,00</Td>
                            <Td>x</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Flex mt={5} gap='2'>
                <Button>Salvar</Button>
                <Button>Cancelar</Button>
            </Flex>
        </Box>
    );
};

export default FormEntradaIngrediente;