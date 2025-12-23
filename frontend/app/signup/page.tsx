'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import './signup.css';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null); 

    try {
      const res = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
      
        setMessage({ type: 'success', text: 'Account created successfully! You are being redirected to the login page...' });
        

        setTimeout(() => {
          router.push('/login'); 
        }, 2000);
      } else {
     
        const errorText = data.message || 'An error occurred during recording';
        setMessage({ type: 'error', text: errorText });
      }

    } catch (error) {
      console.error('Registration error:', error);
      setMessage({ type: 'error', text: 'Connection to server failed. Please ensure your backend is working.' });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        
        <div className="brand-section">
          <h1 className="brand-title">RI7A.LUX</h1>
          <p className="subtitle">Join The Elegance</p>
        </div>

        
        {message && (
          <div className={`message-box ${message.type === 'success' ? 'success-msg' : 'error-msg'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Yassin..."
              className="custom-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Create a password"
              className="custom-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>

        <div className="login-link">
          <p>
            Already have an account?{' '}
            <Link href="/login">Sign In</Link>
          </p>
        </div>

      </div>
    </div>
  );
}