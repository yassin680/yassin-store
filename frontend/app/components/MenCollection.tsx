'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MenCollection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  
  // 1. State للميساج الملون
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const [formData, setFormData] = useState({
    full_name: '', phone: '', city: '', address: ''
  });

  // 2. دالة إظهار الميساج
  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 4000);
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
  
      const response = await fetch('http://127.0.0.1:8001/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
     
        showNotification('🎉 Félicitations! Votre commande a été bien reçue.', 'success');
        closeModal();
      } else {
      
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
      
      <style jsx>{`
        @keyframes slideIn { from { transform: translateX(-50%) translateY(-20px); opacity: 0; } to { transform: translateX(-50%) translateY(0); opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .glass-input { width: 100%; padding: 15px; background: rgba(255, 255, 255, 0.05); border: 1px solid #333; color: #fff; border-radius: 8px; outline: none; transition: 0.3s; }
        .glass-input:focus { border-color: #D4AF37; background: rgba(255, 255, 255, 0.1); box-shadow: 0 0 10px rgba(212, 175, 55, 0.2); }
        .submit-btn { width: 100%; padding: 15px; background: linear-gradient(45deg, #D4AF37, #b8860b); color: #000; border: none; font-weight: bold; cursor: pointer; font-size: 16px; text-transform: uppercase; border-radius: 8px; transition: 0.3s; letter-spacing: 1px; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 20px rgba(212, 175, 55, 0.4); }
      `}</style>

      {notification.show && (
        <div style={{ position: 'fixed', top: '30px', left: '50%', transform: 'translateX(-50%)', backgroundColor: notification.type === 'success' ? '#1b9e58' : '#d32f2f', color: '#fff', padding: '16px 30px', borderRadius: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 2000, fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '10px', animation: 'slideIn 0.4s ease-out' }}>
          {notification.type === 'success' ? '✅' : '⚠️'} {notification.message}
        </div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', paddingBottom: '30px', marginBottom: '40px' }}>
        <Link href="/">
          <button style={{ background: 'transparent', border: '1px solid #D4AF37', color: '#D4AF37', padding: '12px 30px', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: '0.3s' }}>
            ← Retour
          </button>
        </Link>
        <div style={{ textAlign: 'right' }}>
          <h2 style={{ fontSize: '42px', color: '#D4AF37', fontFamily: 'serif', margin: '0 0 10px 0', letterSpacing: '1px' }}>Collection Hommes</h2>
          <p style={{ color: '#888', fontSize: '14px', margin: '0', fontStyle: 'italic' }}>L'élégance masculine par excellence</p>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', width: '100%' }}>
        
        {/* Product 1 */}
        <div style={{ background: '#0a0a0a', border: '1px solid #222', padding: '20px', textAlign: 'center', borderRadius: '12px' }}>
          <div style={{ height: '350px', marginBottom: '20px', overflow: 'hidden', borderRadius: '8px' }}>
            <img src="/image/13.jpg" alt="Oud Royal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '5px' }}>Oud Royal</h3>
          <p style={{ color: '#D4AF37', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>450 DH</p>
          <button onClick={() => openModal('Oud Royal', '450 DH')} className="submit-btn">COMMANDER</button>
        </div>

        {/* Product 2 */}
        <div style={{ background: '#0a0a0a', border: '1px solid #222', padding: '20px', textAlign: 'center', borderRadius: '12px' }}>
          <div style={{ height: '350px', marginBottom: '20px', overflow: 'hidden', borderRadius: '8px' }}>
            <img src="/image/14.jpg" alt="Cuir Intense" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '5px' }}>Cuir Intense</h3>
          <p style={{ color: '#D4AF37', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>350 DH</p>
          <button onClick={() => openModal('Cuir Intense', '350 DH')} className="submit-btn">COMMANDER</button>
        </div>

        {/* Product 3 */}
        <div style={{ background: '#0a0a0a', border: '1px solid #222', padding: '20px', textAlign: 'center', borderRadius: '12px' }}>
          <div style={{ height: '350px', marginBottom: '20px', overflow: 'hidden', borderRadius: '8px' }}>
            <img src="/image/15.jpg" alt="Bois Mystique" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '5px' }}>Bois Mystique</h3>
          <p style={{ color: '#D4AF37', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>500 DH</p>
          <button onClick={() => openModal('Bois Mystique', '500 DH')} className="submit-btn">COMMANDER</button>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, animation: 'fadeIn 0.3s ease' }}>
          <div style={{ background: 'linear-gradient(145deg, #151515, #0a0a0a)', border: '1px solid #333', padding: '40px', width: '500px', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', position: 'relative', animation: 'scaleUp 0.4s ease' }}>
            <button onClick={closeModal} style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>✕</button>
            <h3 style={{ color: '#D4AF37', textAlign: 'center', fontFamily: 'serif', fontSize: '32px', marginBottom: '10px' }}>Finaliser la commande</h3>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}><span style={{ color: '#fff', fontSize: '18px' }}>{selectedProduct?.name}</span><br/><span style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '20px' }}>{selectedProduct?.price}</span></div>
            <form onSubmit={handleSubmit}>
              <input type="text" required placeholder="Nom Complet" className="glass-input" style={{marginBottom:'15px'}} value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} />
              <input type="tel" required placeholder="Téléphone" className="glass-input" style={{marginBottom:'15px'}} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <input type="text" required placeholder="Ville" className="glass-input" style={{marginBottom:'15px'}} value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
              <textarea required placeholder="Adresse" rows={3} className="glass-input" style={{marginBottom:'30px', resize:'none'}} value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
              <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Traitement...' : 'CONFIRMER'}</button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

export default MenCollection;