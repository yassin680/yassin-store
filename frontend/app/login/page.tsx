'use client';

import Link from 'next/link';
import './login.css';

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        
        <div className="brand-section">
          <h1 className="brand-title">RI7A.LUX</h1>
          <p className="subtitle">Welcome Back</p>
        </div>

  
        <form>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="custom-input"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="custom-input"
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