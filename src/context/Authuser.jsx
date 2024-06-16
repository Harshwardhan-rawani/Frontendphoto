import { createContext, useState, useContext, useEffect } from "react";
import { Authcontext } from "./Auth";
import axios from "axios";

export const Authusercontext = createContext();

export const Authuserprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(Authcontext);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data.user);
    } catch (error) {
      console.error("Error in Authusercontext:", error);
      setUser(null); // Ensure user state is reset on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    } else {
      setUser(null);
      setLoading(false); // Ensure loading state is updated when no token is present
    }
  }, [token]);

  return (
    <Authusercontext.Provider value={{ user, loading }}>
      {children}
    </Authusercontext.Provider>
  );
};
