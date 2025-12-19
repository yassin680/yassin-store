'use client';

import { useState } from 'react';
import Link from 'next/link';
import './signup.css'; 

export default function SignupPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Data to send:', { name, email, password });
    
   
    // await fetch('http://127.0.0.1:8000/api/register', ...)
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