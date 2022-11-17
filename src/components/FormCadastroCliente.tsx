import React from 'react';
import {
    Box,
    HStack,
    SimpleGrid
} from '@chakra-ui/react';
import {
    InputText,
    InputNumber,
    InputSelect,
    InputTextarea,
    ButtonSubmit,
    Option
} from '../components/forms/InputData';

const cidades: Array<Option> = [
    { value: 0, label: 'Foz do Iguaçu' },
    { value: 1, label: 'Medianeira' },
    { value: 2, label: 'Cascavel' }
];

const estados: Array<Option> = [
    { value: 0, label: 'Paraná' },
    { value: 1, label: 'Santa Catarina' },
    { value: 2, label: 'Rio Grande do Sul' }
];

function FormCadastroCliente() {
    return (
        <Box>

            <HStack>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputText
                        descLabel='Nome'
                        columSpanBase={12}
                        columSpanMD={12}
                        columSpanLG={6}
                    />
                    <InputText
                        descLabel='Telefone'
                        columSpanBase={12}
                        columSpanMD={12}
                        columSpanLG={2}
                    />
                    <InputText
                        descLabel='Email'
                        columSpanBase={12}
                        columSpanMD={12}
                        columSpanLG={4}
                    />
                </SimpleGrid>
            </HStack>

            <HStack mt={4}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputText
                        descLabel='Endereço'
                        columSpanBase={12}
                        columSpanMD={12}
                        columSpanLG={6}
                    />
                    <InputText
                        descLabel='Bairro'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={2}
                    />
                    <InputText
                        descLabel='Complemento'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={4}
                    />
                </SimpleGrid>
            </HStack>

            <HStack mt={4}>
                <SimpleGrid columns={12} columnGap={3} rowGap={6} minW='full'>
                    <InputNumber
                        descLabel='CEP'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={2}
                    />
                    <InputSelect
                        name='estado'
                        descLabel='Estado'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={4}
                        options={estados}
                    />
                    <InputSelect
                        name='cidade'
                        descLabel='Cidade'
                        columSpanBase={12}
                        columSpanMD={12}
                        columSpanLG={6}
                        options={cidades}
                    />
                </SimpleGrid>
            </HStack>

            <HStack mt={4}>
                <InputTextarea descLabel='Observação' />
            </HStack>

            <ButtonSubmit margin_top={5} />

        </Box>
    );
}

export default FormCadastroCliente;