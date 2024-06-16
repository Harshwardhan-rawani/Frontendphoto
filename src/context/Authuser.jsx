import { createContext, useState, useContext, useEffect } from "react";
import { Authcontext } from "./Auth";
import axios from "axios";

export const Authusercontext = createContext();

export const Authuserprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(Authcontext);

  const fetchData = async () => {
    if (token) {
      try {
        const res = await axios.get(`https://photogallery-y9n9.onrender.com/`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
       
        setUser(res.data.user);
      } catch (error) {
        console.log("error on authusercontext", error);
      }
      finally {
        setLoading(false);
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
    <Authusercontext.Provider value={{ user,loading }}>
      {children}
    </Authusercontext.Provider>
  );
};
