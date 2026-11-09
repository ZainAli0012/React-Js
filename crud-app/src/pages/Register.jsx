import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    const emailExists = users.some(
      (user) =>
        user.email.toLowerCase() === formData.email.trim().toLowerCase()
    );

    if (emailExists) {
      alert("This email is already registered");
      return;
    }

    const newUser = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
    };

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify([...users, newUser])
    );

    alert("Registration successful. Please login.");

    navigate("/login");
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg border border-gray-300 p-6">
      <h1 className="mb-5 text-2xl font-bold">Create Account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block">Full Name</label>
          <input
            type="text" name="name" value={formData.name}
             onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;