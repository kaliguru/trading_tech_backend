const xlsx = require('xlsx');
const fs =require('fs-extra');
const express = require('express');
const router = express.Router();
const wb = xlsx.readFile('uploads/JUSTWIN.xls')
const ws = wb.Sheets['PRODUCTS']


router.get('/',(req,res,next)=>
{
    console.log(wb.SheetNames)
    console.log(ws)
    const data = xlsx.utils.sheet_to_json(ws)
    console.log(data);
    res.status(200).json(data)

})

console.log(wb.SheetNames)

module.exports = router

