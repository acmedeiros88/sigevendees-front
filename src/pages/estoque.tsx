import Template from '../components/layout/Template'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TableEstoque from '../components/TableEstoque'

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
                        <p>ENTRADA</p>
                    </TabPanel>
                    <TabPanel>
                        <p>CADSTRAR</p>
                    </TabPanel>
                    <TabPanel>
                        <TableEstoque />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Template>
    )

}

export default Estoque