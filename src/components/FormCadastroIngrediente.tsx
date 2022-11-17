import React from 'react';
import {
    SimpleGrid,
    HStack,
    Box
} from '@chakra-ui/react';
import {
    InputText,
    InputNumber,
    InputSelect,
    ButtonSubmit,
    Option
} from '../components/forms/InputData';

const TipoProdutoItems: Array<Option> = [
    { value: 0, label: 'INGREDIENTE' },
    { value: 1, label: 'EMPABALGEM' }
];

const undMedidaItems: Array<Option> = [
    { value: 0, label: 'Unidade (und)'},
    { value: 1, label: 'Gramas (g)' },
    { value: 2, label: 'Mililitros (ml)' }
];

function FormCadastroIngrediente() {
    return (
        <Box>

            <HStack mt={2}>
                <SimpleGrid columns={6} columnGap={3} rowGap={6} minW='full'>
                    <InputText
                        descLabel='Descrição'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={3}
                    />
                    <InputSelect
                        name='tipoProdutoEstoque'
                        descLabel='Tipo do produto'
                        columSpanBase={6}
                        columSpanMD={6}
                        columSpanLG={1}
                        options={TipoProdutoItems}
                    />
                    <InputNumber
                        descLabel='Estoque mínimo'
                        columSpanBase={3}
                        columSpanMD={3}
                        columSpanLG={1}
                    />
                    <InputSelect
                        name='unidadeMedida'
                        descLabel='Unidade de medida'
                        columSpanBase={3}
                        columSpanMD={3}
                        columSpanLG={1}
                        options={undMedidaItems}
                    />
                </SimpleGrid>
            </HStack>

            <ButtonSubmit margin_top={10} />

        </Box>
    );
}

export default FormCadastroIngrediente;