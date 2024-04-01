import {createContext, useCallback, useEffect, useMemo, useState} from "react";
import {TokenUser} from "./TokenUser";

export const UserContext = createContext(null);

const UserContextProvider = (props) => {

    const [user, setUser] = useState(TokenUser);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    const setUserContext = useCallback((user) => {
        localStorage.setItem('user', JSON.stringify(user));
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('user');
        setUser(TokenUser);
    }, []);

    const contextValue = useMemo(() => {
        return {
            user,
            setUserContext,
            logout
        }
    }, [user, setUserContext, logout]);
    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;