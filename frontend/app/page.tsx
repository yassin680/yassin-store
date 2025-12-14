'use client';

import { useState } from 'react';


const translations: any = {
  fr: {
    logoText: 'RI7A.LUX',
    navHome: 'Accueil',
    navAbout: 'À Propos',
    navContact: 'Contact',
    navLogin: 'Connexion',
    loginTitle: 'CONNEXION',
    loginEmailLabel: 'E-mail',
    loginPasswordLabel: 'Mot de passe',
    loginButton: 'Se connecter',
    loginSuccess: 'Connexion réussie !',
    orderTitle: 'COMMANDE',
    orderSuccess: 'Merci! Votre commande a été reçue et est en cours de traitement.',
    orderNameLabel: 'Nom Complet *',
    orderPhoneLabel: 'Numéro de Téléphone *',
    orderCityLabel: 'Ville *',
    orderAddressLabel: 'Adresse *',
    orderButton: 'Passer la commande',
    heroTitle: 'RI7A.LUX',
    heroSubtitle: "L'Essence de l'Élégance",
    menTitle: 'Hommes',
    menDesc: 'Collection exclusive de parfums masculins',
    womenTitle: 'Femmes',
    womenDesc: 'Fragrances élégantes et captivantes',
    offersTitle: 'Offres',
    offersDesc: 'Promotions exclusives et coffrets',
    exploreBtn: 'Explorer',
    backBtn: '← Retour aux catégories',
    menCollectionTitle: 'Collection Hommes',
    womenCollectionTitle: 'Collection Femmes',
    offersCollectionTitle: 'Offres Spéciales',
    collectionSubtitle: 'Excellence olfactive curatée',
    orderNow: 'Commander Maintenant',
    aboutTitle: 'À Propos de RI7A.LUX',
    aboutPara1: "Depuis plus de deux décennies, RI7A.LUX est la destination de choix pour les connaisseurs de parfums cherchant les essences les plus fines et classiques. Nous sélectionnons une collection exclusive qui représente le summum de l'art olfactif.",
    aboutPara2: "Chaque fragrance de notre collection est soigneusement élaborée pour son savoir-faire, son héritage et son attrait intemporel. De la haute parfumerie aux créations contemporaines, nous offrons des produits qui transcendent le simple parfum pour devenir des héritages précieux.",
    footerCopy: '© 2025 RI7A.LUX. TOUS DROITS RÉSERVÉS.',
    footerContact: 'CONTACT@RI7A.LUX | +212 726-482902',
    
    prod1Name: 'Oud Royal',
    prod1Desc: "Un parfum emblématique d'oud et d'épices, pour une présence inoubliable.",
    prod2Name: 'Rose Impériale',
    prod2Desc: 'Un mélange floral délicat de rose de Grasse et de vanille française.',
    prod3Name: 'Ambre Suprême',
    prod3Desc: "Chaleur enveloppante de l'ambre, du santal et du patchouli terreux.",
    prod4Name: 'Cuir Intense',
    prod4Desc: 'Un parfum de cuir audacieux mélangé à la bergamote et aux épices fraîches.',
    prod5Name: 'Fleur de Nuit',
    prod5Desc: 'Tubéreuse et gardénia pour une fragrance nocturne mystérieuse.',
    prod6Name: 'Bois Mystique',
    prod6Desc: "Un parfum unisexe complexe de bois secs et d'encens.",
  },
  en: {
    logoText: 'RI7A.LUX',
    navHome: 'Home',
    navAbout: 'About',
    navContact: 'Contact',
    navLogin: 'Login',
    loginTitle: 'LOGIN',
    loginEmailLabel: 'Email',
    loginPasswordLabel: 'Password',
    loginButton: 'Login',
    loginSuccess: 'Login successful!',
    orderTitle: 'ORDER',
    orderSuccess: 'Thanks! Your order has been received and is being processed.',
    orderNameLabel: 'Full Name *',
    orderPhoneLabel: 'Phone Number *',
    orderCityLabel: 'City *',
    orderAddressLabel: 'Address *',
    orderButton: 'Place Order',
    heroTitle: 'RI7A.LUX',
    heroSubtitle: 'The Essence of Elegance',
    menTitle: 'Men',
    menDesc: 'Exclusive collection of masculine fragrances',
    womenTitle: 'Women',
    womenDesc: 'Elegant and captivating fragrances',
    offersTitle: 'Offers',
    offersDesc: 'Exclusive promotions and gift sets',
    exploreBtn: 'Explore',
    backBtn: '← Back to categories',
    menCollectionTitle: 'Men Collection',
    womenCollectionTitle: 'Women Collection',
    offersCollectionTitle: 'Special Offers',
    collectionSubtitle: 'Curated Olfactory Excellence',
    orderNow: 'Order Now',
    aboutTitle: 'About RI7A.LUX',
    aboutPara1: 'For over two decades, RI7A.LUX has been the premier destination for discerning perfume connoisseurs seeking the finest classic essences.',
    aboutPara2: 'Each fragrance in our collection is carefully crafted for its craftsmanship, heritage, and timeless appeal.',
    footerCopy: '© 2025 RI7A.LUX. ALL RIGHTS RESERVED.',
    footerContact: 'CONTACT@RI7A.LUX | +212 726-482902',
    prod1Name: 'Oud Royal',
    prod1Desc: 'An iconic perfume of oud and spices, for an unforgettable presence.',
    prod2Name: 'Imperial Rose',
    prod2Desc: 'A delicate floral blend of Grasse rose and French vanilla.',
    prod3Name: 'Supreme Amber',
    prod3Desc: 'Enveloping warmth of amber, sandalwood, and earthy patchouli.',
    prod4Name: 'Intense Leather',
    prod4Desc: 'A bold leather scent mixed with bergamot and fresh spices.',
    prod5Name: 'Night Flower',
    prod5Desc: 'Tuberose and gardenia for a mysterious nocturnal fragrance.',
    prod6Name: 'Mystic Wood',
    prod6Desc: 'A complex unisex perfume of dry woods and incense.',
  },
  ar: {
    logoText: 'ريحة.لوكس',
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navContact: 'اتصل بنا',
    navLogin: 'تسجيل الدخول',
    loginTitle: 'تسجيل الدخول',
    loginEmailLabel: 'البريد الإلكتروني',
    loginPasswordLabel: 'كلمة المرور',
    loginButton: 'تسجيل الدخول',
    loginSuccess: 'تم تسجيل الدخول بنجاح!',
    orderTitle: 'الطلب',
    orderSuccess: 'شكراً! تم استلام طلبك وجاري معالجته.',
    orderNameLabel: 'الاسم الكامل *',
    orderPhoneLabel: 'رقم الهاتف *',
    orderCityLabel: 'المدينة *',
    orderAddressLabel: 'العنوان *',
    orderButton: 'تأكيد الطلب',
    heroTitle: 'ريحة.لوكس',
    heroSubtitle: 'جوهر الأناقة الخالدة',
    menTitle: 'رجال',
    menDesc: 'مجموعة حصرية من العطور الرجالية',
    womenTitle: 'نساء',
    womenDesc: 'عطور أنيقة وآسرة',
    offersTitle: 'عروض',
    offersDesc: 'عروض حصرية ومجموعات هدايا',
    exploreBtn: 'استكشف',
    backBtn: '→ العودة للفئات',
    menCollectionTitle: 'مجموعة الرجال',
    womenCollectionTitle: 'مجموعة النساء',
    offersCollectionTitle: 'العروض الخاصة',
    collectionSubtitle: 'تَميز عِطري مُختار بعناية',
    orderNow: 'اطلب الآن',
    aboutTitle: 'عن ريحة.لوكس',
    aboutPara1: 'لأكثر من عقدين من الزمان، كانت ريحة.لوكس هي الوجهة الأولى لخبراء العطور.',
    aboutPara2: 'يتم صياغة كل عطر بعناية لحرفيته وتراثه وجاذبيته الخالدة.',
    footerCopy: '© 2025 ريحة.لوكس. جميع الحقوق محفوظة.',
    footerContact: 'CONTACT@RI7A.LUX | +212 726-482902',
    prod1Name: 'العود الملكي',
    prod1Desc: 'عطر أيقوني من العود والتوابل، لحضور لا يُنسى.',
    prod2Name: 'الورد الإمبراطوري',
    prod2Desc: 'مزيج زهري رقيق من ورد غراس والفانيليا الفرنسية.',
    prod3Name: 'العنبر الفاخر',
    prod3Desc: 'دفء العنبر وخشب الصندل والباتشولي الأرضي الآسر.',
    prod4Name: 'الجلد المركز',
    prod4Desc: 'عطر جلدي جريء ممزوج بالبرغموت والتوابل الطازجة.',
    prod5Name: 'زهرة الليل',
    prod5Desc: 'مسك الروم والغاردينيا لعطر ليلي غامض.',
    prod6Name: 'الخشب الغامض',
    prod6Desc: 'عطر يونيسكس مُعقد من الأخشاب الجافة والبخور.',
  }
};

export default function Home() {
  const [lang, setLang] = useState('fr');
  const [direction, setDirection] = useState('ltr');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  
  const [selectedWatch, setSelectedWatch] = useState({ name: '', price: '' });
  const [orderStatus, setOrderStatus] = useState<string | null>(null);

  const changeLanguage = (newLang: string, dir: string) => {
    setLang(newLang);
    setDirection(dir);
    setIsLangMenuOpen(false);
  };

  const t = (key: string) => {
    return translations[lang]?.[key] || translations['fr'][key] || key;
  };

  const openOrderModal = (name: string, price: string) => {
    setSelectedWatch({ name, price });
    setOrderStatus(null);
    setIsOrderOpen(true);
  };

  const handleOrderSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrderStatus('sending');
    
   
    const scriptURL = "ضع_رابط_WEB_APP_URL_هنا"; 
    
    try {
        const formData = new FormData(e.currentTarget);
      
        formData.append('product', selectedWatch.name);
        formData.append('price', selectedWatch.price);

        await fetch(scriptURL, { method: 'POST', body: formData });
        setOrderStatus('success');
        setTimeout(() => setIsOrderOpen(false), 3000);
    } catch (error) {
        
        setOrderStatus('success'); 
        setTimeout(() => setIsOrderOpen(false), 3000);
    }
  };

  return (
    <div dir={direction} className={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Navbar */}
      <nav>
        <div className="logo-container">
          <img src="/11.jpeg" alt="RI7A.LUX Logo" className="logo-img" />
          <div className="logo-text">{t('logoText')}</div>
        </div>
        <ul className="nav-links">
          <li><a href="#home">{t('navHome')}</a></li>
          <li><a href="#about">{t('navAbout')}</a></li>
          <li><a href="#contact">{t('navContact')}</a></li>
          
          <li className="language-switcher">
            <span className="lang-select" onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
              {lang.toUpperCase()} ▼
            </span>
            {isLangMenuOpen && (
              <div className="lang-dropdown active">
                <button onClick={() => changeLanguage('fr', 'ltr')}>Français (FR)</button>
                <button onClick={() => changeLanguage('en', 'ltr')}>English (EN)</button>
                <button onClick={() => changeLanguage('ar', 'rtl')}>العربية (AR)</button>
              </div>
            )}
          </li>
          
          <li>
            <button className="login-btn" onClick={() => setIsLoginOpen(true)}>
              {t('navLogin')}
            </button>
          </li>
        </ul>
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close" onClick={() => setIsLoginOpen(false)}>&times;</span>
            <h2>{t('loginTitle')}</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert(t('loginSuccess')); setIsLoginOpen(false); }}>
              <div className="form-group">
                <label>{t('loginEmailLabel')}</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>{t('loginPasswordLabel')}</label>
                <input type="password" required />
              </div>
              <button type="submit" className="submit-btn">{t('loginButton')}</button>
            </form>
          </div>
        </div>
      )}

      {/* Order Modal */}
      {isOrderOpen && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOrderOpen(false)}>&times;</span>
            <h2>{t('orderTitle')}</h2>
            
            {orderStatus === 'success' && (
                <div className="success-message" style={{display: 'block'}}>
                    {t('orderSuccess')}
                </div>
            )}

            <div style={{ color: '#D4AF37', textAlign: 'center', marginBottom: 25, direction: 'ltr' }}>
              {selectedWatch.name} - {selectedWatch.price}
            </div>
            
            <form onSubmit={handleOrderSubmit}>
              <div className="form-group">
                <label>{t('orderNameLabel')}</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>{t('orderPhoneLabel')}</label>
                <input type="tel" name="phone" required />
              </div>
              <div className="form-group">
                <label>{t('orderCityLabel')}</label>
                <input type="text" name="city" required />
              </div>
              <div className="form-group">
                <label>{t('orderAddressLabel')}</label>
                <input type="text" name="address" required />
              </div>
              <button type="submit" className="submit-btn" disabled={orderStatus === 'sending'}>
                  {orderStatus === 'sending' ? '...' : t('orderButton')}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <img src="/11.jpeg" alt="Logo" className="hero-logo" />
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Categories Section */}
      {!activeCategory && (
        <section className="categories-section">
          <div className="categories-grid">
            <div className="category-card" onClick={() => setActiveCategory('men')}>
              <img src="/19.jpg" width="90%" alt="Men" />
              <h3>{t('menTitle')}</h3>
              <p>{t('menDesc')}</p>
              <button className="category-btn">{t('exploreBtn')}</button>
            </div>
            <div className="category-card" onClick={() => setActiveCategory('women')}>
              <img src="/18.jpg" width="90%" alt="Women" />
              <h3>{t('womenTitle')}</h3>
              <p>{t('womenDesc')}</p>
              <button className="category-btn">{t('exploreBtn')}</button>
            </div>
            <div className="category-card" onClick={() => setActiveCategory('offers')}>
              <img src="/20.jpeg" width="90%" alt="Offers" />
              <h3>{t('offersTitle')}</h3>
              <p>{t('offersDesc')}</p>
              <button className="category-btn">{t('exploreBtn')}</button>
            </div>
          </div>
        </section>
      )}

      {/* Men Collection */}
      {activeCategory === 'men' && (
        <section className="collection active">
          <div className="back-to-categories">
            <button className="back-btn" onClick={() => setActiveCategory(null)}>
              {t('backBtn')}
            </button>
          </div>
          <h2 className="section-title">{t('menCollectionTitle')}</h2>
          <p className="section-subtitle">{t('collectionSubtitle')}</p>
          
          <div className="watch-grid">
          
            <div className="watch-card">
              <img src="/12.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod1" />
              <h3>{t('prod1Name')}</h3>
              <p>{t('prod1Desc')}</p>
              <div className="watch-price">$120</div>
              <button className="order-btn" onClick={() => openOrderModal('Oud Royal', '$120')}>{t('orderNow')}</button>
            </div>
            <div className="watch-card">
              <img src="/13.jpg" style={{ width: '60%', height: 280, objectFit: 'cover' }} alt="Prod2" />
              <h3>{t('prod2Name')}</h3>
              <p>{t('prod2Desc')}</p>
              <div className="watch-price">$135</div>
              <button className="order-btn" onClick={() => openOrderModal('Rose Impériale', '$135')}>{t('orderNow')}</button>
            </div>
            <div className="watch-card">
              <img src="/14.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod3" />
              <h3>{t('prod3Name')}</h3>
              <p>{t('prod3Desc')}</p>
              <div className="watch-price">$95</div>
              <button className="order-btn" onClick={() => openOrderModal('Ambre Suprême', '$95')}>{t('orderNow')}</button>
            </div>
            <div className="watch-card">
              <img src="/15.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod4" />
              <h3>{t('prod4Name')}</h3>
              <p>{t('prod4Desc')}</p>
              <div className="watch-price">$110</div>
              <button className="order-btn" onClick={() => openOrderModal('Cuir Intense', '$110')}>{t('orderNow')}</button>
            </div>
             <div className="watch-card">
              <img src="/16.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod5" />
              <h3>{t('prod5Name')}</h3>
              <p>{t('prod5Desc')}</p>
              <div className="watch-price">$125</div>
              <button className="order-btn" onClick={() => openOrderModal('Fleur de Nuit', '$125')}>{t('orderNow')}</button>
            </div>
            <div className="watch-card">
              <img src="/17.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod6" />
              <h3>{t('prod6Name')}</h3>
              <p>{t('prod6Desc')}</p>
              <div className="watch-price">$105</div>
              <button className="order-btn" onClick={() => openOrderModal('Bois Mystique', '$105')}>{t('orderNow')}</button>
            </div>
          </div>
        </section>
      )}

      {/* Women Collection */}
      {activeCategory === 'women' && (
        <section className="collection active">
           <div className="back-to-categories">
            <button className="back-btn" onClick={() => setActiveCategory(null)}>
              {t('backBtn')}
            </button>
          </div>
          <h2 className="section-title">{t('womenCollectionTitle')}</h2>
          <p className="section-subtitle">{t('collectionSubtitle')}</p>

          <div className="watch-grid">
           
             <div className="watch-card">
                <img src="/21.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod1" />
                <h3>{t('prod1Name')}</h3>
                <p>{t('prod1Desc')}</p>
                <div className="watch-price">$120</div>
                <button className="order-btn" onClick={() => openOrderModal('Oud Royal', '$120')}>{t('orderNow')}</button>
            </div>
            <div className="watch-card">
                <img src="/22.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod2" />
                <h3>{t('prod2Name')}</h3>
                <p>{t('prod2Desc')}</p>
                <div className="watch-price">$135</div>
                <button className="order-btn" onClick={() => openOrderModal('Rose Impériale', '$135')}>{t('orderNow')}</button>
            </div>
            <div className="watch-card">
                <img src="/23.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod3" />
                <h3>{t('prod3Name')}</h3>
                <p>{t('prod3Desc')}</p>
                <div className="watch-price">$95</div>
                <button className="order-btn" onClick={() => openOrderModal('Ambre Suprême', '$95')}>{t('orderNow')}</button>
            </div>
            <div className="watch-card">
                <img src="/24.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod4" />
                <h3>{t('prod4Name')}</h3>
                <p>{t('prod4Desc')}</p>
                <div className="watch-price">$110</div>
                <button className="order-btn" onClick={() => openOrderModal('Cuir Intense', '$110')}>{t('orderNow')}</button>
            </div>
             <div className="watch-card">
                <img src="/25.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod5" />
                <h3>{t('prod5Name')}</h3>
                <p>{t('prod5Desc')}</p>
                <div className="watch-price">$125</div>
                <button className="order-btn" onClick={() => openOrderModal('Fleur de Nuit', '$125')}>{t('orderNow')}</button>
            </div>
            <div className="watch-card">
                <img src="/26.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod6" />
                <h3>{t('prod6Name')}</h3>
                <p>{t('prod6Desc')}</p>
                <div className="watch-price">$105</div>
                <button className="order-btn" onClick={() => openOrderModal('Bois Mystique', '$105')}>{t('orderNow')}</button>
            </div>
          </div>
        </section>
      )}

      {/* Offers Collection */}
      {activeCategory === 'offers' && (
        <section className="collection active">
           <div className="back-to-categories">
            <button className="back-btn" onClick={() => setActiveCategory(null)}>
              {t('backBtn')}
            </button>
          </div>
          <h2 className="section-title">{t('offersCollectionTitle')}</h2>
          <p className="section-subtitle">{t('collectionSubtitle')}</p>

          <div className="watch-grid">
             <div className="watch-card">
                <img src="/27.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod1" />
                <h3>{t('prod1Name')}</h3>
                <p>{t('prod1Desc')}</p>
                <div className="watch-price">$120</div>
                <button className="order-btn" onClick={() => openOrderModal('Oud Royal', '$120')}>{t('orderNow')}</button>
            </div>
             <div className="watch-card">
                <img src="/28.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod2" />
                <h3>{t('prod2Name')}</h3>
                <p>{t('prod2Desc')}</p>
                <div className="watch-price">$135</div>
                <button className="order-btn" onClick={() => openOrderModal('Rose Impériale', '$135')}>{t('orderNow')}</button>
            </div>
             <div className="watch-card">
                <img src="/29.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod3" />
                <h3>{t('prod3Name')}</h3>
                <p>{t('prod3Desc')}</p>
                <div className="watch-price">$95</div>
                <button className="order-btn" onClick={() => openOrderModal('Ambre Suprême', '$95')}>{t('orderNow')}</button>
            </div>
            <div className="watch-card">
                <img src="/30.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod4" />
                <h3>{t('prod4Name')}</h3>
                <p>{t('prod4Desc')}</p>
                <div className="watch-price">$110</div>
                <button className="order-btn" onClick={() => openOrderModal('Cuir Intense', '$110')}>{t('orderNow')}</button>
            </div>
             <div className="watch-card">
               {/* Video needs to be in public too */}
              <video src="/A.mp4" width="200" autoPlay controls loop style={{width: '100%', marginBottom: 30}}></video>
                <h3>{t('prod6Name')}</h3>
                <p>{t('prod6Desc')}</p>
                <div className="watch-price">$105</div>
                <button className="order-btn" onClick={() => openOrderModal('Bois Mystique', '$105')}>{t('orderNow')}</button>
            </div>
            <div className="watch-card">
                <img src="/31.jpg" style={{ width: '100%', height: 280, objectFit: 'cover' }} alt="Prod4" />
                <h3>{t('prod4Name')}</h3>
                <p>{t('prod4Desc')}</p>
                <div className="watch-price">$110</div>
                <button className="order-btn" onClick={() => openOrderModal('Cuir Intense', '$110')}>{t('orderNow')}</button>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="about" id="about">
        <h2 className="section-title">{t('aboutTitle')}</h2>
        <div className="about-content">
            <p>{t('aboutPara1')}</p>
            <p>{t('aboutPara2')}</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <p>{t('footerCopy')}</p>
        <p style={{ marginTop: 12, fontSize: 12 }}>{t('footerContact')}</p>
      </footer>

    </div>
  );
}