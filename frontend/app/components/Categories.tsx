'use client';

import React from 'react';
import Link from 'next/link';

const Categories = () => {
  return (
    <section className="categories-section">
      <style jsx global>{`
        /* هاد السطر كيحيد التسطير الازرق من أي رابط وسط الكارطة */
        .card-link {
          text-decoration: none !important;
          color: inherit;
        }
      `}</style>
      
      <style jsx>{`
        .categories-section {
          background-color: #000;
          padding: 80px 0;
        }
        .container {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .category-card {
          position: relative;
          width: 400px;
          height: 600px;
          overflow: hidden;
          border: 1px solid #333;
          transition: all 0.5s ease;
          cursor: pointer;
        }
        .category-card:hover {
          border-color: #D4AF37;
          transform: translateY(-10px);
        }
        .image-wrapper {
          width: 100%;
          height: 70%;
          overflow: hidden;
        }
        .category-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .category-card:hover .category-img {
          transform: scale(1.1);
        }
        .content {
          height: 30%;
          background-color: #080808;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-top: 1px solid #222;
        }
        h3 {
          color: #D4AF37;
          font-family: serif;
          font-size: 2rem;
          margin-bottom: 5px;
          letter-spacing: 2px;
        }
        p {
          color: #888;
          font-size: 0.9rem;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        
        /* --- ستايل البوطون المصحح --- */
        .btn-explorer {
          padding: 12px 40px; /* كبرنا المساحة باش الكتبة تبان كاملة */
          border: 1px solid #D4AF37;
          color: #D4AF37;
          background: transparent;
          font-weight: bold;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 3px;
          transition: all 0.3s ease;
          cursor: pointer;
          /* حيدنا overflow:hidden باش ما تتقطعش الكتبة */
        }
        
        /* ملي تحط الفارة */
        .category-card:hover .btn-explorer {
          color: #000;
          background-color: #D4AF37; /* الخلفية كتولي ذهبية */
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4); /* ضو خفيف */
        }
      `}</style>

      <div className="container">
        
        {/* HOMMES */}
        <Link href="/homme" className="card-link">
          <div className="category-card">
            <div className="image-wrapper">
              <img src="/image/19.jpg" alt="Hommes"  className="category-img" />
            </div>
            <div className="content">
              <h3>HOMMES</h3>
              <p>Collection Exclusive</p>
              <button className="btn-explorer">EXPLORER</button>
            </div>
          </div>
        </Link>

        {/* FEMMES */}
        <Link href="/women" className="card-link">
          <div className="category-card">
            <div className="image-wrapper">
              <img src="/image/18.jpg " alt="Femmes" className="category-img" />
            </div>
            <div className="content">
              <h3>FEMMES</h3>
              <p>Élégance Pure</p>
              <button className="btn-explorer">EXPLORER</button>
            </div>
          </div>
        </Link>

        {/* OFFRES */}
        <Link href="/offers" className="card-link">
          <div className="category-card">
            <div className="image-wrapper">
              <img src="/image/20.jpeg" alt="Offres" className="category-img" />
            </div>
            <div className="content">
              <h3>OFFRES</h3>
              <p>Coffrets & Cadeaux</p>
              <button className="btn-explorer">EXPLORER</button>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default Categories;