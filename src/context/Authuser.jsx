import { createContext, useState, useContext, useEffect } from "react";
import { Authcontext } from "./Auth";
import axios from "axios";

export const Authusercontext = createContext();

export const Authuserprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { token } = useContext(Authcontext);

  const fetchData = async () => {
    if (token) {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER}/`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
       
        setUser(res.data.user);
      } catch (error) {
        console.log("error on authusercontext", error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
  }
  else{
      setUser("")
  }
  }, [token]);

  return (
    <Authusercontext.Provider value={{ user }}>
      {children}
    </Authusercontext.Provider>
  );
};
