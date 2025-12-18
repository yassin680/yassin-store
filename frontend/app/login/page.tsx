"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  
  // المتغيرات (State)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // دالة تسجيل الدخول
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
       
        console.log("Login Success:", data);
        localStorage.setItem('token', data.token); 
        router.push('/');
      } else {
      
        setError(data.message || "معلومات الدخول خاطئة");
      }
    } catch (err) {
      console.error(err);
      setError("تأكد أن السيرفر (Laravel) شاعل");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-[#d4af37] rounded-xl p-8 shadow-2xl">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-[#d4af37]">login</h1>
          <p className="text-gray-400 text-sm mt-2">welcom RI7A.LUX</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-black border border-gray-700 rounded focus:border-[#d4af37] focus:outline-none text-white transition"
              placeholder="name@example.com"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-black border border-gray-700 rounded focus:border-[#d4af37] focus:outline-none text-white transition"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-900/50 border border-red-500 text-red-200 text-sm rounded text-center">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#d4af37] text-black font-bold py-3 rounded hover:bg-white transition duration-300 disabled:opacity-50"
          >
            {loading ? "conacting..." : "enter"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          you dont have account
          <Link href="/signup" className="text-[#d4af37] hover:underline">
      login now
          </Link>
        </p>
      </div>
    </div>
  );
}