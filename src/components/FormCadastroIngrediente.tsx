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
    VStack,
    Button
} from '@chakra-ui/react';

function FormCadastroIngrediente() {
    return (
        <HStack w='full' h='full' mt={12} alignItems='flex-start'>
            <SimpleGrid columns={6} columnGap={3} rowGap={6} w='full'>
                <GridItem colSpan={3}>
                    <FormControl>
                        <FormLabel>Descrição</FormLabel>
                        <Input />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Tipo do produto</FormLabel>
                        <Select placeholder='Selecionar...'>
                            <option>INGREDIENTE</option>
                            <option>EMPABALGEM</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Estoque mínimo</FormLabel>
                        <NumberInput min={1}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Unidade de medida</FormLabel>
                        <Select placeholder='Selecionar...'>
                            <option>Unidade (und)</option>
                            <option>Gramas (g)</option>
                            <option>Mililitros (ml)</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <Button>Salvar</Button>
                <Button>Cancelar</Button>
            </SimpleGrid>
        </HStack>
    );
};

export default FormCadastroIngrediente;