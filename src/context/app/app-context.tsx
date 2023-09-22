import { createContext, useContext } from "react";
import AppContextType from "./app-context-type";

const initialState: AppContextType = {
    companyName: 'Ryder',
    domain: 'ryder',
    setTickets: (value: [] | undefined) => {},
    locale: 'en',
    tickets: undefined,
    user:   undefined,
};

const AppContext = createContext<AppContextType>(initialState);

export const useAppContext = () => useContext(AppContext);

export default AppContext;