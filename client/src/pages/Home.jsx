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

