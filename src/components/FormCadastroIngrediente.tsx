import React from 'react';
import {
    FormControl,
    FormLabel,
    GridItem,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    SimpleGrid,
    HStack,
    Button,
    Flex,
    Box
} from '@chakra-ui/react';

function FormCadastroIngrediente() {
    return (
        <Box>
            <HStack mt={12} alignItems='flex-start'>
                <SimpleGrid columns={6} columnGap={3} rowGap={6}>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 3 }}>
                        <FormControl>
                            <FormLabel fontSize='sm'>Descrição</FormLabel>
                            <Input />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 1 }}>
                        <FormControl>
                            <FormLabel fontSize='sm' whiteSpace='nowrap'>Tipo do produto</FormLabel>
                            <Select placeholder='Selecionar...'>
                                <option>INGREDIENTE</option>
                                <option>EMPABALGEM</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 3, md: 3, lg: 1 }}>
                        <FormControl>
                            <FormLabel fontSize='sm' whiteSpace='nowrap'>Estoque mínimo</FormLabel>
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
                            <FormLabel fontSize='sm' whiteSpace='nowrap'>Unidade de medida</FormLabel>
                            <Select placeholder='Selecionar...'>
                                <option>Unidade (und)</option>
                                <option>Gramas (g)</option>
                                <option>Mililitros (ml)</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                </SimpleGrid>
            </HStack>
            <Flex mt={10} gap='2'>
                <Button>Salvar</Button>
                <Button>Cancelar</Button>
            </Flex>
        </Box>
    );
};

export default FormCadastroIngrediente;