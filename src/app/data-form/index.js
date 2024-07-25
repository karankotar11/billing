export default function GetFormData({ displayform, setdisplayform,setbillData, billData,setdisplaydata}) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setbillData((billData) => ({
            ...billData,
            [name]: value,
        }));
    };


    return (
        <div className={`${displayform}`}>
            <table className="w-full" id="tbl1">
                <tr>
                    <td colSpan="2" >Name of Party</td>
                    <td className="text-center w-2/5 border-y-0" rowSpan="2"><input type="text" name="ownername" id="ownername" value={setbillData.ownername} onChange={handleInputChange} className="w-30" placeholder="Name " /></td>
                    <td>CR. NO.</td>
                    <td><input type="text" className="w-20" name="crno" id="crno" value={setbillData.crno} onChange={handleInputChange} /></td>
                    <td className="text-center">DATE</td>
                    <td><input type="text" className="w-20" name="date" id="date" value={setbillData.date} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td colSpan="2"><input type="text" className="w-30" name="partyname" id="partyname" value={setbillData.partyname} onChange={handleInputChange} placeholder="Name of Party" /></td>

                    <td>REF NO</td>
                    <td colSpan="3"><input type="text" className="w-32" name="refno" id="refno" value={setbillData.refno} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td colSpan="2">PAN No.:<input type="text" className="w-24" name="panno" id="panno" value={setbillData.panno} onChange={handleInputChange} placeholder="PAN No." /></td>
                    <td style={{ textAlign: 'center', textDecoration: 'underline', borderTop: 'none', border: '0px' }}>Freight Statement</td>
                    <td>PERIOD</td>
                    <td><input type="text" className="w-20" name="periodfrom" id="periodfrom" value={setbillData.periodfrom} onChange={handleInputChange} /></td>
                    <td className="text-center">TO</td>
                    <td><input type="text" className="w-20" name="periodto" id="periodto" value={setbillData.periodto} onChange={handleInputChange} /></td>
                </tr>

            </table>

            <table className="w-full" id="tbl2">
                <tr>
                    <th>Sr</th>
                    <th>L/R No.</th>
                    <th>Date</th>
                    <th>Destination</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                    <th>HSD(Ltr)</th>
                    <th>HSD</th>
                    <th>Advance</th>
                    <th>Net Amt.</th>
                </tr>
                <tr>
                    <td colSpan="11"><input type="text" className="w-42" name="numberplate" id="numberplate" value={setbillData.numberplate} onChange={handleInputChange} placeholder="GJ00XX0000" /></td>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                    <td><input type="text" className="w-20" name="sr" id="sr" value={setbillData.sr} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="lrno" id="lrno" value={setbillData.lrno} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="datesr" id="datesr" value={setbillData.datesr} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="destination" id="destination" value={setbillData.destination} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="qty" id="qty" value={setbillData.qty} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="rate" id="rate" value={setbillData.rate} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="amount" id="amount" value={setbillData.amount} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="hsdltr" id="hsdltr" value={setbillData.hsdltr} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="hsd" id="hsd" value={setbillData.hsd} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="advance" id="advance" value={setbillData.advance} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="netamt" id="netamt" value={setbillData.netamt} onChange={handleInputChange} /></td>
                </tr>
                <tr style={{ textAlign: 'center' }}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><input type="text" className="w-20" name="qty2" id="qty2" value={setbillData.qty2} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="rate2" id="rate2" value={setbillData.rate2} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="amount2" id="amount2" value={setbillData.amount2} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="hsdltr2" id="hsdltr2" value={setbillData.hsdltr2} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="hsd2" id="hsd2" value={setbillData.hsd2} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="advance2" id="advance2" value={setbillData.advance2} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="netamt2" id="netamt2" value={setbillData.netamt2} onChange={handleInputChange} /></td>
                </tr>

                <tr className="h-80 text-center align-bottom">
                    <td colSpan="4" className="text-left ">Grand Total..</td>
                    <td><input type="text" className="w-20" name="gqty" id="gqty" value={setbillData.gqty} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="grate" id="grate" value={setbillData.grate} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="gamount" id="gamount" value={setbillData.gamount} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="ghsdltr" id="ghsdltr" value={setbillData.ghsdltr} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="ghsd" id="ghsd" value={setbillData.ghsd} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="gadvance" id="gadvance" value={setbillData.gadvance} onChange={handleInputChange} /></td>
                    <td><input type="text" className="w-20" name="gnetamt" id="gnetamt" value={setbillData.gnetamt} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td colSpan="11">Amount Credited...<input type="text" className="w-6/12" name="amountcreditedword" id="amountcreditedword" value={setbillData.amountcreditedword} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                    <td colSpan="11" className="">

                        <table className="w-full border-none border-0" id="tbl3">
                            <tr>
                                <th className="border-2 border-black">Summary</th>
                                <th className="border-2 border-black">Credit</th>
                                <th className="border-2 border-black">Debit</th>
                                <th>Net Payable..</th>
                                <th colSpan="2"><input type="number" name="netpayable" id="netpayable" value={setbillData.netpayable} onChange={handleInputChange} /></th>

                            </tr>
                            <tr>
                                <td className="border-2 border-black">Total Freight+Other</td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="totalfrecr" id="totalfrecr" value={setbillData.totalfrecr} onChange={handleInputChange} /></td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="totalfredb" id="totalfredb" value={setbillData.totalfredb} onChange={handleInputChange} /></td>
                                <td colSpan="4" rowSpan="2" className="border-y-0 pl-5"> CN.  No. &nbsp;<input type="text" className="ml-5" readOnly/></td>
                            </tr>
                            <tr>
                                <td className="border-2 border-black">Detention</td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="detentioncr" id="detentioncr" value={setbillData.detentioncr} onChange={handleInputChange} /></td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="detentiondb" id="detentiondb" value={setbillData.detentiondb} onChange={handleInputChange} /></td>

                            </tr>
                            <tr>
                                <td className="border-2 border-black">Shortage Amount</td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="shortamtcr" id="shortamtcr" value={setbillData.shortamtcr} onChange={handleInputChange} /></td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="shortamtdb" id="shortamtdb" value={setbillData.shortamtdb} onChange={handleInputChange} /></td>
                                <td colSpan="4" rowSpan="2" className="border-y-0 pl-5"> PAID RS.<input type="text" className="ml-5" readOnly/></td>
                            </tr>
                            <tr>
                                <td className="border-2 border-black">Advance + Diesel</td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="advancedieselcr" id="advancedieselcr" value={setbillData.advancedieselcr} onChange={handleInputChange} /></td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="advancedieseldb" id="advancedieseldb" value={setbillData.advancedieseldb} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td className="border-2 border-black">Other Deductions</td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="otherdeductcr" id="otherdeductcr" value={setbillData.otherdeductcr} onChange={handleInputChange} /></td>
                                <td className="border-2 border-black"><input type="text" className="w-20" name="otherdeductdb" id="otherdeductdb" value={setbillData.otherdeductdb} onChange={handleInputChange} /></td>
                                <td colSpan="4" rowSpan="2" className="border-y-0 pl-5"> PAID DT.<input type="text" className="ml-5" readOnly/></td>
                            </tr>
                            <tr>
                                <th className="border-2 border-black">Total...</th>
                                <th className="border-2 border-black"><input type="text" className="w-20" name="totalcr" id="totalcr" value={setbillData.totalcr} onChange={handleInputChange} /></th>
                                <th className="border-2 border-black"><input type="text" className="w-20" name="totaldb" id="totaldb" value={setbillData.totaldb} onChange={handleInputChange} /></th>
                            </tr>

                        </table>

                    </td>

                </tr>
            </table>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg m-20" onClick={() => {
                    setdisplayform('hidden')
                    setdisplaydata('');
            }}>Next</button>
        </div>
    )
}