import AppContext from "./AppContext";
import React, { useState } from 'react'
import { useToast } from "@chakra-ui/react";





const AppState = (props) => {
    const toast = useToast()

    // Tab1
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Age, setAge] = useState('');
    const [Email, setEmail] = useState('');
    const [MobileNo, setMobileNo] = useState('');
    // Tab2
    const [BusinessName, setBusinessName] = useState('');
    const [GstNo, setGstNo] = useState('');
    const [Address, setAddress] = useState('');
    const [CompanyTurnover, setCompanyTurnover] = useState('');
    const [CompanyEmployees, setCompanyEmployees] = useState('');
    //Tab3
    const [loanAmount, setloanAmount] = useState('');
    const [intrestrate, setintrestrate] = useState('');
    const [loantenure, setloantenure] = useState('');

    //tabindex
    const [index, setindex] = useState(0);
    const increasetabindex = () => {
        setindex(index + 1)
    }
    const decreasetabindex = () => {
        setindex(index - 1)
    }




    const adddata = async () => {

        const response = await fetch('/post/details', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'auth-token': token
            },
            body: JSON.stringify({ FirstName: FirstName, LastName: LastName, Age: Age, Email: Email, MobileNo: MobileNo, BusinessName: BusinessName, GstNo: GstNo, Address: Address, CompanyEmployees: CompanyEmployees, CompanyTurnover: CompanyTurnover, loanAmount: loanAmount, loantenure: loantenure, intrestrate: intrestrate })
        })
        const json = await response.json();
        if (json.success) {
            setFirstName('')
            setLastName('')
            setAge('')
            setEmail('')
            setMobileNo('')
            setBusinessName('')
            setCompanyEmployees('')
            setCompanyTurnover('')
            setGstNo('')
            setAddress('')
            setloanAmount('')
            setloanAmount('')
            setintrestrate('')
            setindex(0)

            return toast({
                title: 'Data Posted Successfully',
                // description: "We've created your account for you.",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-left'
            })
        }

    }








    return (<AppContext.Provider value={{ FirstName, setFirstName, LastName, setLastName, Age, setAge, Email, setEmail, MobileNo, setMobileNo, BusinessName, setBusinessName, GstNo, setGstNo, Address, setAddress, CompanyTurnover, setCompanyTurnover, CompanyEmployees, setCompanyEmployees, loanAmount, setloanAmount, increasetabindex, decreasetabindex, index, intrestrate, setintrestrate, loantenure, setloantenure, adddata, setindex }} >
        {props.children}
    </AppContext.Provider>)
}


export default AppState