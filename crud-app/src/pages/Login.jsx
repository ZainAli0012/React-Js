import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("register") || "[]"
    );

    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email.trim().toLowerCase() &&
        item.password === password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        name: user.name,
        email: user.email,
      })
    );

    navigate("/");
  };

  return (
    <div className="mx-auto mt-8 max-w-sm rounded border border-gray-300 p-5">
      <h2 className="mb-4 text-xl font-bold">Login</h2>

      <form onSubmit={handleLogin} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border border-gray-300 px-3 py-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded border border-gray-300 px-3 py-2"
        />

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;