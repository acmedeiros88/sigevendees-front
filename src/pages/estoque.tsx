import React from 'react';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel 
} from '@chakra-ui/react';
import Template from '../components/layout/Template';
import TableEstoque from '../components/TableEstoque';
import FormCadastroIngrediente from '../components/FormCadastroIngrediente';

function Estoque() {
    return (
        <Template titulo='ESTOQUE'>
            <Tabs variant='enclosed'>
                <TabList as='nav'>
                    <Tab>Entrada</Tab>
                    <Tab>Cadastrar</Tab>
                    <Tab>Consultar</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    </TabPanel>
                    <TabPanel>
                        <FormCadastroIngrediente />
                    </TabPanel>
                    <TabPanel>
                        <TableEstoque />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Template>
    );
};

export default Estoque;