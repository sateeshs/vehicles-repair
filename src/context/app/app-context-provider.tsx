'use client'
import { useSession } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react"
import AppContext from "./app-context";
import { User } from "next-auth";

type Props = {
    children: ReactNode;
}

const AppContextProvider = ({children}: Props) => {
//const {data: session, status } = useSession({required: false});
const [companyName, setCompanyName] = useState<any>('en');

const [locale, setLocale] = useState<any>('en');
const [domain, setDomain] = useState<any>('ryder');
const [user, setUser] = useState<User | undefined>();
const [tickets, setTickets] = useState<[] | undefined>(undefined);


useEffect(() => {
    if (user) {
       // Pull user specific data 
    }
});

return (<AppContext.Provider
    value={{
        companyName,
        domain,
        user,
        locale,
        tickets,
        setTickets
}}>
{children}
</AppContext.Provider>
);
};

export default AppContextProvider;