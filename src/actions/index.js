'use server'

import connectToDB from "@/database";
import LocationofUser from "@/model"

export async function SaveLocation(location){
    await connectToDB();
    try{
        const UserLocation = await LocationofUser.create(location)
        if(UserLocation){
            console.log("saved")
        }
    
    }
    catch(e){
        console.log(e);
    }
}