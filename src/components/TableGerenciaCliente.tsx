import {
    Box,
    useColorModeValue,
    Table,
    TableContainer,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Icon
} from "@chakra-ui/react";
import {
    FiTrash2,
    FiEdit
} from 'react-icons/fi';
import { IconType } from 'react-icons';

interface cliente {
    codigo: number;
    nome: string;
    telefone: string;
    email: string;
    endereco: string;
    observacao: string;
    editar: IconType;
    excluir: IconType;
};

const clientes: Array<cliente> = [
    { codigo: 1, nome: 'Maria Aparecida Cardoso', telefone: '045999999999', email: 'cliente@email.com', endereco: 'Rua Canindé, 1900 - Morumbi', observacao: 'cliente amigo', editar: FiEdit, excluir: FiTrash2 },
    { codigo: 2, nome: 'Tatiana Pereira da Silva', telefone: '045888888888', email: 'cliente@email.com', endereco: 'Rua João Batista Frigola, 1062 - Morumbi', observacao: '', editar: FiEdit, excluir: FiTrash2 },
    { codigo: 3, nome: 'Adriano Cardoso Medeiros', telefone: '045777777777', email: 'cliente@email.com', endereco: 'Rua João Batista Frigola, 1062 - Morumbi', observacao: '', editar: FiEdit, excluir: FiTrash2 },
    { codigo: 4, nome: 'Iracema Pereira', telefone: '045666666666', email: 'cliente@email.com', endereco: 'Tv Girua, 63 - Três Lagoas', observacao: 'cliente amigo', editar: FiEdit, excluir: FiTrash2 }
];

const RowItem = (cliente: cliente) => {
    return (
        <Tr>
            <Td>{cliente.codigo}</Td>
            <Td>{cliente.nome}</Td>
            <Td>{cliente.telefone}</Td>
            <Td>{cliente.email}</Td>
            <Td>{cliente.endereco}</Td>
            <Td>{cliente.observacao}</Td>
            <Td><Icon as={cliente.editar} /></Td>
            <Td><Icon as={cliente.excluir} /></Td>
        </Tr>
    );
};

function TableGerenciaCliente() {
    return (
        <Box>
            <TableContainer overflowY='auto' mt={2}>
                <Table variant='striped' bgColor={useColorModeValue('blackalpha.300', 'blackalpha.700')}>
                    <Thead>
                        <Tr>
                            <Th>Código</Th>
                            <Th>Nome</Th>
                            <Th>Telefone</Th>
                            <Th>Email</Th>
                            <Th>Endereço</Th>
                            <Th>Observação</Th>
                            <Th>Ação</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {clientes.map((cliente) => (
                            <RowItem key={cliente.codigo} {...cliente} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TableGerenciaCliente;