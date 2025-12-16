
interface CollectionProps {
  setView: (view: string) => void;
}

export default function MenCollection({ setView }: CollectionProps) {
  return (
 <section className="collection active" style={{ padding: '100px 60px', background: '#0a0a0a' }}>
     
      <div className="back-to-categories" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <button 
          onClick={() => setView('home')}
          className="back-btn" 
          style={{ padding: '12px 35px', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))', border: '2px solid #D4AF37', color: '#D4AF37', cursor: 'pointer' }}
        >
          ← Retour aux catégories
        </button>
      </div>
      
      <h2 className="section-title" style={{ textAlign: 'center', fontSize: '56px', color: '#D4AF37', marginBottom: '20px' }}>Collection Hommes</h2>
      <p className="section-subtitle" style={{ textAlign: 'center', color: '#a0a0a0', marginBottom: '90px', fontStyle: 'italic' }}>Excellence olfactive curatée</p>

      <div className="watch-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
        
        {/* Product 1 */}
        <div className="watch-card" style={{ background: '#1a1a1a', padding: '45px', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <img src="/3.jpg" alt="Oud Royal" style={{ width: '100%', height: '280px', objectFit: 'cover', marginBottom: '30px' }} />
            <h3 style={{ color: '#D4AF37', fontSize: '26px', marginBottom: '12px' }}>Oud Royal</h3>
            <p style={{ color: '#a0a0a0', marginBottom: '25px' }}>Un parfum emblématique d'oud et d'épices.</p>
            <div style={{ fontSize: '28px', color: '#F5F5F5', fontWeight: 'bold', marginBottom: '25px' }}>$120</div>
            <button className="order-btn" style={{ padding: '14px 35px', background: 'linear-gradient(135deg, #D4AF37, #c9a232)', border: 'none', cursor: 'pointer' }}>Commander</button>
        </div>

        {/* Product 2 */}
        <div className="watch-card" style={{ background: '#1a1a1a', padding: '45px', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <img src="/4.webp" alt="Cuir Intense" style={{ width: '100%', height: '280px', objectFit: 'cover', marginBottom: '30px' }} />
            <h3 style={{ color: '#D4AF37', fontSize: '26px', marginBottom: '12px' }}>Cuir Intense</h3>
            <p style={{ color: '#a0a0a0', marginBottom: '25px' }}>Un parfum de cuir audacieux mélangé à la bergamote.</p>
            <div style={{ fontSize: '28px', color: '#F5F5F5', fontWeight: 'bold', marginBottom: '25px' }}>$110</div>
            <button className="order-btn" style={{ padding: '14px 35px', background: 'linear-gradient(135deg, #D4AF37, #c9a232)', border: 'none', cursor: 'pointer' }}>Commander</button>
        </div>

        {/* Product 3 */}
        <div className="watch-card" style={{ background: '#1a1a1a', padding: '45px', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <img src="/8.jpg" alt="Bois Mystique" style={{ width: '100%', height: '280px', objectFit: 'cover', marginBottom: '30px' }} />
            <h3 style={{ color: '#D4AF37', fontSize: '26px', marginBottom: '12px' }}>Bois Mystique</h3>
            <p style={{ color: '#a0a0a0', marginBottom: '25px' }}>Un parfum complexe de bois secs et d'encens.</p>
            <div style={{ fontSize: '28px', color: '#F5F5F5', fontWeight: 'bold', marginBottom: '25px' }}>$105</div>
            <button className="order-btn" style={{ padding: '14px 35px', background: 'linear-gradient(135deg, #D4AF37, #c9a232)', border: 'none', cursor: 'pointer' }}>Commander</button>
        </div>

      </div>
    </section>
  ) 
}






