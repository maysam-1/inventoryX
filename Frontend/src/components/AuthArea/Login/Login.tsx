import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import login from '../../../assets/map3.jfif'
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="h-[calc(100vh-120px)] flex overflow-hidden">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 bg-[#F4EBE1]">
        <div className="w-full max-w-md">
          <div className="bg-[#FAF6F1] rounded-2xl shadow-2xl p-4 border-2 border-[#D4C4B0]">
            <h1 className="text-xl font-bold text-[#6B5744] mb-2">Welcome Back</h1>
            <p className="text-[#9B8B7E] mb-6 text-sm">Sign in to continue to your account</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#6B5744] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-1 text-sm bg-white border-2 border-[#D4C4B0] rounded-lg focus:ring-2 focus:ring-[#A0907D] focus:border-[#A0907D] outline-none transition text-[#6B5744]"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#6B5744] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-1 text-sm bg-white border-2 border-[#D4C4B0] rounded-lg focus:ring-2 focus:ring-[#A0907D] focus:border-[#A0907D] outline-none transition pr-12 text-[#6B5744]"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9B8B7E] hover:text-[#6B5744]"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <a href="#" className="text-sm text-[#A0907D] hover:text-[#6B5744] font-small">
                  Forgot password?
                </a>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#B5A08E] via-[#A0907D] to-[#B5A08E] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
              >
                Sign In
              </button>
            </div>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-[#9B8B7E]">
                Don't have an account?{' '}
                <a href="#" className="text-[#A0907D] hover:text-[#6B5744] font-semibold text-sm">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
     <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={login}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}