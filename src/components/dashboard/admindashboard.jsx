import { useState } from "react"
import Alltask from "../others/alltask"
import Createtask from "../others/createtask"
import Header from "../others/header"
import ActionAlerts from "../others/succesalert"

export default function AdminDashBoard({data}) {
    const [success,setsuccess]=useState(false);
    const alerttogler=()=>
    {
        setsuccess(true);
    }
    return (<>

        <Header data={data}/>
       {success&&<ActionAlerts setsuccess={setsuccess} />}
        <Createtask togler={alerttogler}/>
        <Alltask/>
    </>)
}