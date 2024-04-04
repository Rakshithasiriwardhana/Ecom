import {createContext, useCallback, useEffect, useMemo, useState} from "react";
import {TokenUser} from "./TokenUser";
import { ResourcePath } from "./ResourcePath";
import axios from "axios";

export const UserContext = createContext(null);

const UserContextProvider = (props) => {

    const [user, setUser] = useState(TokenUser);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    

  useEffect(() => {
    axios
      .get(ResourcePath.GET_ALL_USERS)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
            users,
            setUserContext,
            logout
        }
    }, [user,users, setUserContext, logout]);
    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;