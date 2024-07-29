'use server'

import connectToDB from "@/database";
import LocationofUser from "@/model"

export async function SaveLocation(location){
    await connectToDB();
    try{
         LocationofUser.create(location)
       
    
    }
    catch(e){
        console.log(e);
    }
}