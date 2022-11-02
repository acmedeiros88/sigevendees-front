import React from 'react';
import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react';
import FormCadastroCliente from '../components/FormCadastroCliente';
import Template from '../components/layout/Template';
import TableGerenciaCliente from '../components/TableGerenciaCliente';

function Cliente() {
    return (
        <Template titulo='CLIENTE'>
            <Tabs variant='enclosed'>
                <TabList as='nav'>
                    <Tab>Cadastrar</Tab>
                    <Tab>Gerenciar</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <FormCadastroCliente />
                    </TabPanel>
                    <TabPanel>
                        <TableGerenciaCliente />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Template>
    );
}

export default Cliente;