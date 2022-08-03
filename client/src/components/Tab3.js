import React, { useContext, useState } from 'react'

import { validate } from 'react-email-validator';

import {
    VStack, FormControl,
    FormLabel, Input,
    Button,
    Box,

    Flex,

} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

import AppContext from '../context/AppContext';

export const Tab3 = () => {
    const toast = useToast()

    const [loading, setloading] = useState(false);
    const context = useContext(AppContext);
    const { setindex, decreasetabindex, increasetabindex, loantenure, setloantenure, loanAmount, setloanAmount, intrestrate, setintrestrate, } = context
    const { FirstName, setFirstName, LastName, setLastName, MobileNo, setMobileNo, Age, setAge, Email, setEmail } = context
    const { BusinessName, setBusinessName, GstNo, setGstNo, Address, setAddress, CompanyTurnover, setCompanyTurnover, CompanyEmployees, setCompanyEmployees, adddata } = context
    const handleloanchange = (e) => {
        setloanAmount(e.target.value)
    }
    const handleltchange = (e) => {
        setloantenure(e.target.value)
    }
    const handleintrestchange = (e) => {
        setintrestrate(e.target.value)
    }

    function checktab1() {
        setloading(true)
        if (FirstName === '' || LastName === '' || MobileNo === '' || Age === '' || Email === '') {
            setloading(false)
            setindex(0)
            return toast({
                title: 'Please Fill All The Personal Details',

                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-left'
            })
        }
        if (!validate(Email)) {
            setloading(false)
            setindex(0)

            return toast({
                title: 'Enter a valid email',

                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-left'
            })
        }
        if (!(MobileNo.length === 10)) {
            setloading(false)
            setindex(0)

            return toast({
                title: 'Enter a valid Mobile.no',

                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-left'
            })
        }
        return true;
    }

    function checktab2() {
        if (BusinessName === '' || GstNo === '' || CompanyEmployees === '' || CompanyTurnover === '' || Address === '') {
            setloading(false)
            setindex(1)
            return toast({
                title: 'Please Fill all the Business Details',

                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-left'
            })
        }
        if (!(GstNo.length === 15)) {
            setloading(false)
            setindex(1)
            return toast({
                title: 'Please a valid Gst.no',

                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-left'
            })
        }
        return true
    }
    function checktab3() {
        if (loanAmount === '' || loantenure === '' || intrestrate === '') {
            setloading(false)
            setindex(2)
            return toast({
                title: 'Please Fill all the Loan Details',

                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-left'
            })
        }
        return true
    }
    const handlesubmit = () => {
        const tab1 = checktab1()
        if (tab1 === true) {
            const tab2 = checktab2()
            if (tab2 === true) {
                const tab3 = checktab3()
                if (tab3 === true) {

                    adddata();
                }

            }

        }
    }
    return (
        <Box rounded={'lg'}

        >
            <VStack>

                <FormControl id='loanamount' isRequired>
                    <FormLabel htmlFor='lamount'>Loan Amount</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='lamount'
                        type='number'
                        onChange={(e) => { handleloanchange(e) }}

                        value={loanAmount}
                        placeholder='Enter the Loan Amount'

                    />

                </FormControl>
                <FormControl id='intrest' isRequired>
                    <FormLabel htmlFor='ir'>Intrest Rate</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='ir'
                        type='number'
                        value={intrestrate}
                        onChange={(e) => { handleintrestchange(e) }}

                        placeholder="Enter intrest rate in %"

                    />

                </FormControl>
                <FormControl id='loantenure' isRequired>
                    <FormLabel htmlFor='lt'>Loan Tenure</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='lt'
                        type='number'
                        value={loantenure}
                        onChange={(e) => { handleltchange(e) }}

                        placeholder="Enter Loan Tenure"

                    />

                </FormControl>

                <Flex>
                    <Button onClick={() => { decreasetabindex() }} colorScheme='blue' m={5} variant='solid'>
                        {'<-'}Previous
                    </Button>
                    <Button loadingText='Submitting' isLoading={loading} onClick={handlesubmit} colorScheme='blue' m={5} variant='solid'>
                        SUBMIT
                    </Button></Flex>


            </VStack >
        </Box>
    )
}
