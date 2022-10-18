import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react';
import React from 'react';
import FormCadastroCliente from '../components/FormCadastroCliente';
import Template from '../components/layout/Template';

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
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Template>
    );
};

export default Cliente;