'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import './signup.css';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        alert('Account created successfully! Please login.'); 
        router.push('/login');
      } else {
  
        alert('Error: ' + JSON.stringify(data.message || data));
      }

    } catch (error) {
      console.error('An error occurred:', error);
      alert('Failed to connect to the server.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        
        <div className="brand-section">
          <h1 className="brand-title">RI7A.LUX</h1>
          <p className="subtitle">Join The Elegance</p>
        </div>

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