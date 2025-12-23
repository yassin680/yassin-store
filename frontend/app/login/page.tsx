'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './login.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null); 

    try {
      const res = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
  
        setMessage({ type: 'success', text: 'Login successful! Transfer in progress...' });
        
       
        setTimeout(() => {
          router.push('/'); 
        }, 1500);
      } else {
       
        setMessage({ type: 'error', text: data.message || 'Incorrect login information' });
      }

    } catch (error) {
      console.error('Login error:', error);
      setMessage({ type: 'error', text: 'Failed to connect to the server' });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        <div className="brand-section">
          <h1 className="brand-title">RI7A.LUX</h1>
          <p className="subtitle">Welcome Back</p>
        </div>

        {message && (
          <div className={`message-box ${message.type === 'success' ? 'success-msg' : 'error-msg'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="custom-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="custom-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="register-link">
          <p>
            You don't have an account?{' '}
            <Link href="/signup">Register Now</Link>
          </p>
        </div>

      </div>
    </div>
  );
}