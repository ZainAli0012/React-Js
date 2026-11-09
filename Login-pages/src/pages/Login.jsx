
import React, { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login Successful!');
    console.log('Logging in with:', {
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-50 flex items-center justify-center overflow-hidden p-4 font-sans">
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-purple-400/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl min-h-[520px] bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-[#6b21a8] text-white flex flex-col items-center justify-center p-8 md:p-12 text-center rounded-b-[60px] md:rounded-b-none md:rounded-r-[140px] transition-all duration-300">
          <div className="max-w-xs flex flex-col items-center">
            <h1 className="font-sans text-4xl md:text-5xl mb-3 tracking-wide">
              Hello Friend!
            </h1>

            <p className="text-sm md:text-base font-light text-purple-100/90 mb-8">
              Enter your details
            </p>

            <a
              href="/signup"
              className="px-8 py-2.5 bg-transparent border-2 border-white/80 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200 active:scale-95"
            >
              Sign Up
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-xs bg-gradient-to-br from-purple-100/80 to-purple-50/60 backdrop-blur-md border border-white/90 rounded-3xl p-8 shadow-lg text-center">
            <h2 className="font-sans text-3xl md:text-4xl text-slate-800 mb-6">
              Login
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative flex items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-2.5 pl-4 pr-10 bg-white/90 border border-slate-200/80 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <Mail className="absolute right-3 text-slate-400 pointer-events-none" size={18} />
              </div>

              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full py-2.5 pl-4 pr-10 bg-white/90 border border-slate-200/80 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
