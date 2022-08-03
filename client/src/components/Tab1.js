import React, { useContext } from 'react'
import {
    VStack, FormControl,
    FormLabel, Input,
    Button,
    Box,

} from '@chakra-ui/react'
import AppContext from '../context/AppContext';

export const Tab1 = () => {
    const context = useContext(AppContext);
    const { FirstName, increasetabindex, setFirstName, LastName, setLastName, MobileNo, setMobileNo, Age, setAge, Email, setEmail } = context

    const handlefchange = (e) => {
        setFirstName(e.target.value)

    }
    const handlelchange = (e) => {
        setLastName(e.target.value)
    }
    const handleagechange = (e) => {
        setAge(e.target.value)
    }
    const handleemailchange = (e) => {
        setEmail(e.target.value)
    }
    const handlemobilechange = (e) => {
        setMobileNo(e.target.value)
    }
    return (
        <Box rounded={'lg'}

        >
            <VStack>
                <FormControl id='firstname' isRequired>
                    <FormLabel htmlFor='fname'>First Name</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='fname'
                        value={FirstName}
                        type='text'
                        onChange={(e) => { handlefchange(e) }}
                        placeholder='Enter Your First Name'

                    />

                </FormControl>
                <FormControl id='lastname' isRequired>
                    <FormLabel htmlFor='lname'>Last Name</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='lname'
                        value={LastName}
                        type='text'
                        onChange={(e) => { handlelchange(e) }}

                        placeholder='Enter Your Last Name'

                    />

                </FormControl>
                <FormControl id='Email' isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='email'
                        type='email'
                        value={Email}
                        onChange={(e) => { handleemailchange(e) }}


                        placeholder='Enter Your Email'

                    />

                </FormControl>
                <FormControl id='Agee' isRequired>
                    <FormLabel htmlFor='Age'>Age</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='Age'
                        value={Age}
                        type='number'
                        placeholder='Enter Your Age'
                        onChange={(e) => { handleagechange(e) }}


                    />

                </FormControl>
                <FormControl id='Mobile.no' isRequired>
                    <FormLabel htmlFor='Mobile'>Mobile.no</FormLabel>
                    <Input
                        colorScheme={'facebook'}
                        id='Mobile'
                        minLength={10}
                        maxLength={10}
                        value={MobileNo}
                        type='number'
                        onChange={(e) => { handlemobilechange(e) }}

                        placeholder='Enter Your Mobile.no'

                    />

                </FormControl>



                <Button onClick={() => { increasetabindex() }} colorScheme='blue' m={5} variant='solid'>
                    Next{'->'}
                </Button>


            </VStack >
        </Box>
    )
}
