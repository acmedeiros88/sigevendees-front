import {
    Box,
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
    SimpleGrid
} from "@chakra-ui/react";

function FormCadastroCliente() {
    return (
        <Box>
            <HStack mt={12}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6}>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 6 }}>
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 3 }}>
                        <FormControl>
                            <FormLabel>Telefone</FormLabel>
                            <Input />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 3 }}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input />
                        </FormControl>
                    </GridItem>
                </SimpleGrid>
            </HStack>
            <HStack mt={4}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6}>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 6 }}>
                        <FormControl>
                            <FormLabel>Endereço</FormLabel>
                            <Input />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 3 }}>
                        <FormControl>
                            <FormLabel>Bairro</FormLabel>
                            <Input />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 3 }}>
                        <FormControl>
                            <FormLabel>Complemento</FormLabel>
                            <Input />
                        </FormControl>
                    </GridItem>
                </SimpleGrid>
            </HStack>
            <HStack mt={4}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6}>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 6 }}>
                        <FormControl>
                            <FormLabel>Cidade</FormLabel>
                            <Input />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 3 }}>
                        <FormControl>
                            <FormLabel>Estado</FormLabel>
                            <Input />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 6, md: 6, lg: 3 }}>
                        <FormControl>
                            <FormLabel>CEP</FormLabel>
                            <Input />
                        </FormControl>
                    </GridItem>
                </SimpleGrid>
            </HStack>
        </Box>
    );
}

export default FormCadastroCliente;