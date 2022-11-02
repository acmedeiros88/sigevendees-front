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

function Pedido() {
    return (
        <Template titulo='PEDIDO'>
            <Tabs variant='enclosed'>
                <TabList as='nav'>
                    <Tab>Cadastrar</Tab>
                    <Tab>Gerenciar</Tab>
                    <Tab>Consultar</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <FormCadastroPedido />
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Template>
    );
}

export default Pedido;