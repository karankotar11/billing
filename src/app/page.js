
'use client'

import { useState } from "react"
import { initialBillData } from "./utils";
import GetFormData from "./data-form";
import PrintData from "./print-data/page";




export default function Home() {
 

  const [displayform, setdisplayform] = useState('');
  const [displaydata, setdisplaydata] = useState('hidden')
  const [billData, setbillData] = useState(initialBillData)


  return (
    <div className="w-screen">
      <GetFormData displayform={displayform} setbillData={setbillData} setdisplayform={setdisplayform} billData={billData} setdisplaydata={setdisplaydata}/>

      <PrintData displaydata={displaydata} setdisplaydata={setdisplaydata} billData={billData} setdisplayform={setdisplayform}/>
      
  
    </div>
  );
}
