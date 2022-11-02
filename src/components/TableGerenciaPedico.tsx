import React from 'react';
import {
    Box,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    Icon,
    IconButton
} from '@chakra-ui/react';
import {
    FiList,
    FiCheckCircle,
    FiXCircle,
    FiEdit2,
    FiDollarSign
} from "react-icons/fi";

interface Pedido {
    codigo: number;
    cliente: string;
    instante: string;
    entrega: string;
    situacao: string;
    itens?: string;
}

const Pedidos: Array<Pedido> = [
    { codigo: 1, cliente: 'Cliente 01', instante: '01/01/2022', entrega: '31/01/2022', situacao: 'PRODUÇÃO' },
    { codigo: 2, cliente: 'Cliente 02', instante: '01/01/2022', entrega: '31/01/2022', situacao: 'PRONTO' },
    { codigo: 3, cliente: 'Cliente 03', instante: '01/01/2022', entrega: '31/01/2022', situacao: 'PRODUÇÃO' },
    { codigo: 4, cliente: 'Cliente 04', instante: '01/01/2022', entrega: '31/01/2022', situacao: 'PRONTO' }
];

const RowItem = (Pedido: Pedido) => {
    return (
        <Tr>
            <Td>{Pedido.codigo}</Td>
            <Td>{Pedido.cliente}</Td>
            <Td>{Pedido.instante}</Td>
            <Td>{Pedido.entrega}</Td>
            <Td>{Pedido.situacao}</Td>
            <Td><Icon as={FiList} /></Td>
            <Td>
                <IconButton variant='outline' colorScheme='teal' aria-label='Pedido pronto' icon={<FiCheckCircle />} />
                <IconButton variant='outline' colorScheme='teal' aria-label='Editar pedido' icon={<FiEdit2 />} />
                <IconButton variant='outline' colorScheme='teal' aria-label='Finalizar venda' icon={<FiDollarSign />} />
                <IconButton variant='outline' colorScheme='teal' aria-label='Pedido cancelado' icon={<FiXCircle />} />
            </Td>
        </Tr>
    );
};

function TableGerenciaPedido() {
    return (
        <Box>

            <TableContainer overflowY='auto' mt={3}>
                <Table variant='striped' bgColor={useColorModeValue('blackalpha.300', 'blackalpha.700')}>
                    <Thead>
                        <Tr>
                            <Th>Código</Th>
                            <Th>Cliente</Th>
                            <Th>Data solicitado</Th>
                            <Th>Data entrega</Th>
                            <Th>Situação</Th>
                            <Th>Itens</Th>
                            <Th>Ação</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Pedidos.map((item) => (
                            <RowItem key={item.codigo} {...item} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

        </Box>
    );
}

export default TableGerenciaPedido;