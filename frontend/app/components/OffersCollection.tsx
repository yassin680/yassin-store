'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const OffersCollection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  
  // 1. زدنا State جديدة باش نتحكمو فالميساج (اللون والكتبة)
  const [notification, setNotification] = useState({ show: false, message: '', type: '' }); // type: 'success' | 'error'

  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    city: '',
    address: ''
  });

  // دالة باش نبينو الميساج ونخبيوه اوتوماتيكيا من بعد 3 ثواني
  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 4000); // كيبقى 4 ثواني ويغبر
  };

  const openModal = (productName: string, price: string) => {
    setSelectedProduct({ name: productName, price: price });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ full_name: '', phone: '', city: '', address: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      ...formData,
      product_name: selectedProduct.name,
      price: selectedProduct.price
    };

    try {
      // تأكد من البور (8000 ولا 8001)
      const response = await fetch('http://127.0.0.1:8001/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // ✅ هنا كنعيطو للميساج الخضر
        showNotification('🎉 Félicitations! Votre commande a été bien reçue.', 'success');
        closeModal();
      } else {
        // ❌ هنا كنعيطو للميساج الحمر
        showNotification('❌ Erreur lors de la commande. Veuillez réessayer.', 'error');
      }
    } catch (error) {
      console.error(error);
      showNotification('❌ Erreur de connexion au serveur.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '110px 5% 50px' }}>
      
      {/* CSS Styles */}
      <style jsx>{`
        @keyframes slideIn { from { transform: translateX(-50%) translateY(-20px); opacity: 0; } to { transform: translateX(-50%) translateY(0); opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        
        .glass-input { width: 100%; padding: 15px; background: rgba(255, 255, 255, 0.05); border: 1px solid #333; color: #fff; border-radius: 8px; outline: none; transition: 0.3s; }
        .glass-input:focus { border-color: #D4AF37; background: rgba(255, 255, 255, 0.1); box-shadow: 0 0 10px rgba(212, 175, 55, 0.2); }
        .submit-btn { width: 100%; padding: 15px; background: linear-gradient(45deg, #D4AF37, #b8860b); color: #000; border: none; font-weight: bold; cursor: pointer; font-size: 16px; text-transform: uppercase; border-radius: 8px; transition: 0.3s; letter-spacing: 1px; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 20px rgba(212, 175, 55, 0.4); }
      `}</style>

      {/* === Notification Component (الميساج الملون) === */}
      {notification.show && (
        <div style={{
          position: 'fixed',
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)', // باش يجي فالوسط
          backgroundColor: notification.type === 'success' ? '#1b9e58' : '#d32f2f', // خضر ولا حمر
          color: '#fff',
          padding: '16px 30px',
          borderRadius: '50px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          zIndex: 2000,
          fontWeight: 'bold',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          animation: 'slideIn 0.4s ease-out'
        }}>
          {notification.type === 'success' ? '✅' : '⚠️'}
          {notification.message}
        </div>
      )}

      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', paddingBottom: '30px', marginBottom: '40px' }}>
        <Link href="/">
          <button style={{ background: 'transparent', border: '1px solid #D4AF37', color: '#D4AF37', padding: '12px 30px', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: '0.3s' }}>
            ← Retour
          </button>
        </Link>
        <div style={{ textAlign: 'right' }}>
          <h2 style={{ fontSize: '42px', color: '#D4AF37', fontFamily: 'serif', margin: '0 0 10px 0', letterSpacing: '1px' }}>Offres Spéciales</h2>
          <p style={{ color: '#888', fontSize: '14px', margin: '0', fontStyle: 'italic' }}>Promotions exclusives et coffrets cadeaux</p>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', width: '100%' }}>
        
        {/* Product 1: Pack Mystique */}
        <div style={{ background: '#0a0a0a', border: '1px solid #222', padding: '20px', textAlign: 'center', borderRadius: '12px' }}>
          <div style={{ height: '350px', marginBottom: '20px', overflow: 'hidden', borderRadius: '8px' }}>
            <img src="/image/31.jpg" alt="Pack Mystique" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '5px' }}>Pack Mystique</h3>
          <p style={{ color: '#D4AF37', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>850 DH</p>
          <button onClick={() => openModal('Pack Mystique', '850 DH')} className="submit-btn">COMMANDER</button>
        </div>

        {/* Product 2: Musc Clair */}
        <div style={{ background: '#0a0a0a', border: '1px solid #222', padding: '20px', textAlign: 'center', borderRadius: '12px' }}>
          <div style={{ height: '350px', marginBottom: '20px', overflow: 'hidden', borderRadius: '8px' }}>
            <img src="/image/28.jpg" alt="Musc Clair" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '5px' }}>Musc Clair</h3>
          <p style={{ color: '#D4AF37', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>650 DH</p>
          <button onClick={() => openModal('Musc Clair', '650 DH')} className="submit-btn">COMMANDER</button>
        </div>

        {/* Product 3: Coffret Royal */}
        <div style={{ background: '#0a0a0a', border: '1px solid #222', padding: '20px', textAlign: 'center', borderRadius: '12px' }}>
          <div style={{ height: '350px', marginBottom: '20px', overflow: 'hidden', borderRadius: '8px' }}>
            <img src="/image/13.jpg" alt="Coffret Royal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '5px' }}>Coffret Royal</h3>
          <p style={{ color: '#D4AF37', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>1200 DH</p>
          <button onClick={() => openModal('Coffret Royal', '1200 DH')} className="submit-btn">COMMANDER</button>
        </div>

      </div>

      {/* MODAL */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, animation: 'fadeIn 0.3s ease' }}>
          <div style={{ background: 'linear-gradient(145deg, #151515, #0a0a0a)', border: '1px solid #333', padding: '40px', width: '500px', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', position: 'relative', animation: 'scaleUp 0.4s ease' }}>
            <button onClick={closeModal} style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>✕</button>
            <h3 style={{ color: '#D4AF37', textAlign: 'center', fontFamily: 'serif', fontSize: '32px', marginBottom: '10px' }}>Finaliser la commande</h3>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <span style={{ color: '#fff', fontSize: '18px' }}>{selectedProduct?.name}</span><br/>
              <span style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '20px' }}>{selectedProduct?.price}</span>
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" required placeholder="Nom Complet" className="glass-input" style={{marginBottom:'15px'}} value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} />
              <input type="tel" required placeholder="Numéro de Téléphone" className="glass-input" style={{marginBottom:'15px'}} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <input type="text" required placeholder="Ville" className="glass-input" style={{marginBottom:'15px'}} value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
              <textarea required placeholder="Adresse de Livraison" rows={3} className="glass-input" style={{marginBottom:'30px', resize:'none'}} value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
              <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Traitement...' : 'CONFIRMER'}</button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

export default OffersCollection;