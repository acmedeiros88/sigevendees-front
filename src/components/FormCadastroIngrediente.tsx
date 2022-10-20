import {
    SimpleGrid,
    HStack,
    Box
} from '@chakra-ui/react';
import {
    InputText,
    InputNumber,
    InputSelect,
    ButtonSubmit
} from '../components/forms/InputData';

interface itemProps {
    descricao: string;
    value: number;
};

const TipoProdutoItems: Array<itemProps> = [
    { descricao: 'INGREDIENTE', value: 0 },
    { descricao: 'EMPABALGEM', value: 1 }
];

const undMedidaItems: Array<itemProps> = [
    { descricao: 'Unidade (und)', value: 0 },
    { descricao: 'Gramas (g)', value: 1 },
    { descricao: 'Mililitros (ml)', value: 2 }
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
                        props={{
                            descLabel: 'Tipo do produto',
                            columSpanBase: 6,
                            columSpanMD: 6,
                            columSpanLG: 1
                        }}
                        options={TipoProdutoItems}
                    />
                    <InputNumber
                        descLabel='Estoque mínimo'
                        columSpanBase={3}
                        columSpanMD={3}
                        columSpanLG={1}
                    />
                    <InputSelect
                        props={{
                            descLabel: 'Unidade de medida',
                            columSpanBase: 3,
                            columSpanMD: 3,
                            columSpanLG: 1
                        }}
                        options={undMedidaItems}
                    />
                </SimpleGrid>
            </HStack>

            <ButtonSubmit margin_top={10} />
            
        </Box>
    );
};

export default FormCadastroIngrediente;