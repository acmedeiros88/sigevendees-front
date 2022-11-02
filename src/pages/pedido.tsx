import React from 'react';
import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react';
import FormCadastroPedido from '../components/FormCadastroPedido';
import Template from '../components/layout/Template';
import TableGerenciaPedido from '../components/TableGerenciaPedico';

function Pedido() {
    return (
        <Template titulo='PEDIDO'>
            <Tabs variant='enclosed'>
                <TabList as='nav'>
                    <Tab>Cadastrar</Tab>
                    <Tab>Gerenciar</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <FormCadastroPedido />
                    </TabPanel>
                    <TabPanel>
                        <TableGerenciaPedido />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Template>
    );
}

export default Pedido;