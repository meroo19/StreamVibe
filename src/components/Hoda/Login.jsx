import React, { useState } from "react";
import { Eye, EyeOff, Play, Sparkles } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const StreamVibeLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="w-full flex flex-col md:flex-row bg-[#0F0F0F] text-white font-cairo py-12 md:py-20">
      <div className="relative md:w-2/5 w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-[#1e1e23b3] to-[#0f0f12b3] overflow-hidden rounded-xl">
        <div className="absolute text-[150px] md:text-[200px] opacity-5 text-yellow-600">
          <Play size="1em" />
        </div>
        <div className="relative z-10 text-center max-w-sm">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 rounded-full bg-yellow-800/30 mr-3">
              <Play size={30} color="hsl(60, 80%, 40%)" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">
              StreamVibe
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Unlimited Entertainment
          </h2>
          <p className="text-gray-400 text-sm md:text-base mx-auto mb-4">
            Stream thousands of movies, TV shows, and exclusive originals
            anywhere, anytime.
          </p>
          <div className="flex justify-center space-x-2 opacity-70">
            <Sparkles className="text-yellow-500" />
            <Sparkles className="text-yellow-500" />
            <Sparkles className="text-yellow-500" />
          </div>
        </div>
      </div>

      <div className="md:w-3/5 w-full flex justify-center items-center px-4 md:px-6 mt-10 md:mt-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-neutral-900/90 border border-neutral-700 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-center mb-6 text-sm md:text-base">
            Login to continue your journey
          </p>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white outline-none border border-neutral-700"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white outline-none border border-neutral-700"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-yellow-500"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-yellow-500" />
              <span className="text-gray-400 text-sm">Remember me</span>
            </label>
            <button type="button" className="text-yellow-500 text-sm hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition transform hover:scale-105 mb-6"
          >
            {isLoading ? "Logging In..." : "Login"}
          </button>

          <p className="text-center text-gray-400 mb-6">
            Don’t have an account?
            <Link to="/SignUp">
              <button
                type="button"
                className="ml-2 text-yellow-500 hover:underline"
              >
                Sign up
              </button>
            </Link>
          </p>

          <div className="flex gap-4">
            {["Google", "Apple", "Facebook"].map((provider) => (
              <button
                key={provider}
                type="button"
                className="flex-1 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-300 hover:bg-neutral-700 transition"
              >
                {provider}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default StreamVibeLogin;
