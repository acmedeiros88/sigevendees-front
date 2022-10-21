import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    useColorModeValue,
    Box,
    Icon
} from '@chakra-ui/react';
import { FiBookOpen } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface Receita {
    codigo: number;
    nome: string;
    tipo: string;
    venda_em: string;
    rendimento: string;
    total_custo: string;
    venda: string;
    lucro: string;
    detalhes: IconType;
};

const Receitas: Array<Receita> = [
    { codigo: 1, nome: 'Bolo de chocolate', tipo: 'DOCE', venda_em: 'g', rendimento: `${1500} g`, total_custo: `R$ ${100.00}`, venda: `R$ ${10.00}`, lucro: `R$ ${5.00}`, detalhes: FiBookOpen },
    { codigo: 2, nome: 'Cento pastel', tipo: 'SALGADO', venda_em: 'CENTO', rendimento: `${100} UND`, total_custo: `R$ ${100.00}`, venda: `R$ ${10.00}`, lucro: `R$ ${5.00}`, detalhes: FiBookOpen },
    { codigo: 3, nome: 'Pote da felicidade', tipo: 'DOCE', venda_em: 'UND', rendimento: `${1} UND`, total_custo: `R$ ${100.00}`, venda: `R$ ${10.00}`, lucro: `R$ ${5.00}`, detalhes: FiBookOpen },
    { codigo: 4, nome: 'Tortinha', tipo: 'SALGADO', venda_em: 'UND', rendimento: `${1} UND`, total_custo: `R$ ${100.00}`, venda: `R$ ${10.00}`, lucro: `R$ ${5.00}`, detalhes: FiBookOpen }
];

const RowItem = (Receita: Receita) => {
    return (
        <Tr>
            <Td>{Receita.codigo}</Td>
            <Td>{Receita.nome}</Td>
            <Td>{Receita.tipo}</Td>
            <Td>{Receita.venda_em}</Td>
            <Td>{Receita.rendimento}</Td>
            <Td>{Receita.total_custo}</Td>
            <Td>{Receita.venda}</Td>
            <Td>{Receita.lucro}</Td>
            <Td><Icon as={Receita.detalhes} /></Td>
        </Tr>
    );
};

function TableConsultaReceita() {
    return (
        <Box>

            <TableContainer overflowY='auto' mt={3}>
                <Table variant='striped' bgColor={useColorModeValue('blackalpha.300', 'blackalpha.700')}>
                    <Thead>
                        <Tr>
                            <Th>Código</Th>
                            <Th>Descrição</Th>
                            <Th>Tipo</Th>
                            <Th>Venda em</Th>
                            <Th>Rendimento</Th>
                            <Th>Custo total</Th>
                            <Th>Venda</Th>
                            <Th>Lucro</Th>
                            <Th>Detalhes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Receitas.map((item) => (
                            <RowItem key={item.codigo} {...item} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

        </Box>
    );
};

export default TableConsultaReceita;