import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    useColorModeValue,
    Box
} from '@chakra-ui/react';

interface Ingrediente {
    codigo: number;
    nome: string;
    estoqueMinimo: string;
    estoque: string;
    total: string;
    categoria: string;
}

const Ingredientes: Array<Ingrediente> = [
    { codigo: 1, nome: 'Farinha de trigo', estoqueMinimo: `${500}g`, estoque: `${500}g`, total: `R$ ${10.00}`, categoria: 'INGREDIENTE' },
    { codigo: 2, nome: 'Leite', estoqueMinimo: `${1000}ml`, estoque: `${500}g`, total: `R$ ${3.00}`, categoria: 'INGREDIENTE' },
    { codigo: 3, nome: 'Ovo', estoqueMinimo: `${30}und`, estoque: `${500}g`, total: `R$ ${9.99}`, categoria: 'INGREDIENTE' },
    { codigo: 4, nome: 'Pote de 250ml', estoqueMinimo: `${50}und`, estoque: `${500}g`, total: `R$ ${5.00}`, categoria: 'EMBALAGEM' }
];

const RowItem = (Ingrediente: Ingrediente) => {
    return (
        <Tr>
            <Td>{Ingrediente.codigo}</Td>
            <Td>{Ingrediente.nome}</Td>
            <Td>{Ingrediente.estoqueMinimo}</Td>
            <Td>{Ingrediente.estoque}</Td>
            <Td>{Ingrediente.total}</Td>
            <Td>{Ingrediente.categoria}</Td>
        </Tr>
    );
};

function TableEstoque() {
    return (
        <Box>

            <TableContainer overflowY='auto' mt={3}>
                <Table variant='striped' bgColor={useColorModeValue('blackalpha.300', 'blackalpha.700')}>
                    <Thead>
                        <Tr>
                            <Th>Código</Th>
                            <Th>Produto</Th>
                            <Th>Estoque mínimo</Th>
                            <Th>Estoque atual</Th>
                            <Th>Valor total</Th>
                            <Th>Tipo</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Ingredientes.map((item) => (
                            <RowItem key={item.codigo} {...item} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

        </Box>
    );
}

export default TableEstoque;