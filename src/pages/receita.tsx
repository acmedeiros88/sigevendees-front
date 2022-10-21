import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react';
import FormCadastroReceita from '../components/FormCadastroReceita';
import Template from '../components/layout/Template';
import TableConsultaReceita from '../components/TableConsultaReceita';

function Receita() {
    return (
        <Template titulo='RECEITA'>
            <Tabs variant='enclosed'>
                <TabList as='nav'>
                    <Tab>Cadastrar</Tab>
                    <Tab>Consultar</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <FormCadastroReceita />
                    </TabPanel>
                    <TabPanel>
                        <TableConsultaReceita />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Template>
    );
};

export default Receita;