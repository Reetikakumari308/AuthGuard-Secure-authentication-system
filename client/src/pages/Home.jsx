import React, { useContext } from "react";
import Hero from "../components/Hero";
import Instructor from "../components/Instructor";
import Technologies from "../components/Technologies";
import "../styles/Home.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Context } from "../main";
import Footer from "../layout/Footer";

const Home = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  const logout = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setUser(null);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Logout failed");
        console.error(err);
      });
  };

  return (
    <div className="home-container">
      <Hero />
      <Instructor />
      <Technologies />
      <Footer />
      {/* You can optionally show a logout button */}
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Home;
