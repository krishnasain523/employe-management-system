import { createContext, useEffect, useState } from "react"
import { getlocaldata } from "../utils/localstorage";

export const Authcontext = createContext()

export default function Authprovider({ children }) {
    const [userdata, setUserdata] = useState(null);

    useEffect(() => {
        const { employee, admin } = getlocaldata();
        setUserdata({ employee, admin });
    }, [])
    return (<>
        <Authcontext.Provider value={userdata}>
            {children}
        </Authcontext.Provider>
    </>)
}