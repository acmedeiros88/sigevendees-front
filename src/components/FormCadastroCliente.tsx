import {
    Box,
    HStack,
    SimpleGrid
} from "@chakra-ui/react";
import {
    InputText,
    InputNumber,
    InputSelect,
    InputTextarea,
    ButtonSubmit
} from '../components/forms/InputData';

interface itemProps {
    descricao: string;
    value: number;
};

const cidades: Array<itemProps> = [
    { descricao: 'Foz do Iguaçu', value: 0 },
    { descricao: 'Medianeira', value: 1 },
    { descricao: 'Cascavel', value: 2 }
];

const estados: Array<itemProps> = [
    { descricao: 'Paraná', value: 0 },
    { descricao: 'Santa Catarina', value: 1 },
    { descricao: 'Rio Grande do Sul', value: 2 }
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
                    <InputSelect
                        props={{
                            descLabel: 'Cidade',
                            columSpanBase: 12,
                            columSpanMD: 12,
                            columSpanLG: 6
                        }}
                        options={cidades}
                    />
                    <InputSelect
                        props={{
                            descLabel: 'Estado',
                            columSpanBase: 6,
                            columSpanMD: 6,
                            columSpanLG: 2
                        }}
                        options={estados}
                    />
                    <InputNumber
                        descLabel='CEP'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={4}
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