import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    // Ensure phone number starts with '+' for international format
    if (!data.phone.startsWith("+")) {
      data.phone = `+${data.phone}`;
    }

    await axios
      .post("https://authguard-secure-authentication-system.onrender.com", data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.success(res.data.message);
        navigateTo(`/otp-verification/${data.email}/${data.phone}`);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Registration failed");
      });
  };

  return (
    <>
      <div>
        <form className="auth-form" onSubmit={handleSubmit(handleRegister)}>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Name"
            required
            {...register("name", { required: "Name is required" })}
          />
          <input
            type="email"
            placeholder="Email"
            required
            {...register("email", { required: "Email is required" })}
          />
          <div>
            <input
              type="text"
              placeholder="Phone (e.g., +1234567890)"
              required
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+\d{10,15}$/,
                  message: "Enter a valid international phone number",
                },
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
          <input
            type="password"
            placeholder="Password"
            required
            {...register("password", { required: "Password is required" })}
          />
          <div className="verification-method">
            <p>Select Verification Method</p>
            <div className="wrapper">
              <label>
                <input
                  type="radio"
                  name="verificationMethod"
                  value="email"
                  {...register("verificationMethod", { required: true })}
                />
                Email
              </label>
              <label>
                <input
                  type="radio"
                  name="verificationMethod"
                  value="phone"
                  {...register("verificationMethod", { required: true })}
                />
                Phone
              </label>
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
