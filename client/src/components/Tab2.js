import React, { useContext } from 'react'
import {
    VStack, FormControl,
    FormLabel, Input,
    Button,
    Box,

    Textarea,
    Flex,
    Select,
} from '@chakra-ui/react'

import AppContext from '../context/AppContext';

export const Tab2 = () => {
    const context = useContext(AppContext);
    const { BusinessName, setBusinessName, GstNo, setGstNo, Address, setAddress, CompanyTurnover, setCompanyTurnover, CompanyEmployees, setCompanyEmployees, increasetabindex, decreasetabindex } = context
    const handlecompanychange = (e) => {
        setBusinessName(e.target.value)

    }
    const handlegstchange = (e) => {
        setGstNo(e.target.value)

    }
    const handlecompanyturnoverchange = (e) => {
        setCompanyTurnover(e.target.value)
    }
    const handleadresschange = (e) => {
        setAddress(e.target.value)
    }
    const handleemployeechange = (e) => {
        setCompanyEmployees(e.target.value)
    }
    return (
        <Box rounded={'lg'}

        >
            <VStack>
                <FormControl id='Companyname' isRequired>
                    <FormLabel htmlFor='cname'>Company Name</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='cname'
                        value={BusinessName}
                        onChange={(e) => { handlecompanychange(e) }}
                        type='text'
                        placeholder='Enter your Company Name'

                    />

                </FormControl>
                <FormControl id='gst' isRequired>
                    <FormLabel htmlFor='GstNo'>GST.no</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='GstNo'
                        value={GstNo}
                        onChange={(e) => { handlegstchange(e) }}
                        type='number'
                        placeholder='Enter your Registered Gst No'

                    />

                </FormControl>
                <FormControl id='companyturnover' isRequired>
                    <FormLabel htmlFor='ct'>Company Turnover</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='ct'
                        value={CompanyTurnover}
                        onChange={(e) => { handlecompanyturnoverchange(e) }}
                        type='number'
                        placeholder="Enter your Company's Turnover"

                    />

                </FormControl>
                <FormControl id='comapanyemployee' isRequired>
                    <FormLabel htmlFor='ce'>Company Employees</FormLabel>
                    <Select onChange={(e) => { handleemployeechange(e) }} placeholder='Select Number of Employees'>
                        <option value='1-10'>1-10</option>
                        <option value='10-100'>10-100</option>
                        <option value='100+'>100+</option>
                    </Select>

                </FormControl  >
                <FormControl isRequired mt={4}>
                    <FormLabel htmlFor='adress' isRequired>Company Address</FormLabel>
                    <Textarea onChange={(e) => { handleadresschange(e) }}
                        placeholder={"Enter your Company Address"} value={Address} id='adress' resize={'none'} />
                </FormControl>
                <Flex>
                    <Button onClick={() => { decreasetabindex() }} colorScheme='blue' m={5} variant='solid'>
                        {'<-'}Previous
                    </Button>
                    <Button onClick={() => { increasetabindex() }} colorScheme='blue' m={5} variant='solid'>
                        Next{'->'}
                    </Button></Flex>


            </VStack >
        </Box>
    )
}


