const express = require('express')
const tab1 = require('../models/tab1')
const tab2 = require('../models/tab2')
const tab3 = require('../models/tab3')
const router = express.Router()




router.post('/details', async (req, res) => {


    let success = true
    try {

        const tab1detailsposted = await tab1.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Age: req.body.Age,
            Email: req.body.Email,
            MobileNo: req.body.MobileNo,
        })
        if (tab1detailsposted) {
            const tab2detailsposted = await tab2.create({
                userid: tab1detailsposted._id,
                BusinessName: req.body.BusinessName,
                GstNo: req.body.GstNo,
                Address: req.body.Address,
                CompanyTurnover: req.body.CompanyTurnover,
                CompanyEmployees: req.body.CompanyEmployees

            })
            if (tab2detailsposted) {
                const tab3detailsposted = await tab3.create({
                    userid: tab1detailsposted._id,
                    loanAmount: req.body.loanAmount,
                    intrestrate: req.body.intrestrate,
                    loantenure: req.body.loantenure,

                })
                if (tab3detailsposted) {
                    return res.json({ success: success, response: "Details Posted", res: tab1detailsposted })
                }
            }
        }

    } catch (error) {
        success = false
        return res.json({ success: success, response: error })
    }



})






module.exports = router