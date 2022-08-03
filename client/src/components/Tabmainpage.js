import React, { useContext } from 'react'

import { Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import { Tab3 } from './Tab3';
import AppContext from '../context/AppContext';

export const Tabmainpage = () => {
    const context = useContext(AppContext);
    const { index, setindex } = context
    const handleTabsChange = (index) => {
        setindex(index)
    }
    return (
        <Container maxW={'xl'} p={5} centerContent>

            <Box d="flex" maxH={'3xl'} justifyContent="center" p={3} bg="white" w={"100%"} m={1} borderRadius={"lg"}><Tabs onChange={handleTabsChange} index={index} isFitted variant='soft-rounded' colorScheme={'whatsapp'}>

                <TabList mb='1em'>
                    <Tab ><Text color={'Black'} centerContent>TAB 1</Text></Tab>
                    <Tab ><Text color={'Black'} centerContent>TAB 2</Text></Tab>
                    <Tab ><Text color={'Black'} centerContent>TAB 3</Text></Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Tab1 />
                    </TabPanel>
                    <TabPanel>
                        <Tab2 />
                    </TabPanel>
                    <TabPanel>
                        <Tab3 />
                    </TabPanel>
                </TabPanels>
            </Tabs></Box>

        </Container >
    )
}
