"use client";
import { useState, FormEvent } from 'react';

// 1. هنا حطينا الترجمة باش تكون منظمة
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
    orderNow: 'Commander Maintenant',
    aboutTitle: 'À Propos de RI7A.LUX',
    aboutPara1: "Depuis plus de deux décennies, RI7A.LUX est la destination de choix pour les connaisseurs de parfums cherchant les essences les plus fines et classiques. Nous sélectionnons une collection exclusive qui représente le summum de l'art olfactif.",
    aboutPara2: "Chaque fragrance de notre collection est soigneusement élaborée pour son savoir-faire, son héritage et son attrait intemporel. De la haute parfumerie aux créations contemporaines, nous offrons des produits qui transcendent le simple parfum pour devenir des héritages précieux.",
    footerCopy: '© 2025 RI7A.LUX. TOUS DROITS RÉSERVÉS.',
    footerContact: 'CONTACT@RI7A.LUX | +212 726-482902'
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
    orderNow: 'Order Now',
    aboutTitle: 'About RI7A.LUX',
    aboutPara1: 'For over two decades, RI7A.LUX has been the premier destination for discerning perfume connoisseurs seeking the finest classic essences.',
    aboutPara2: 'Each fragrance in our collection is carefully crafted for its craftsmanship, heritage, and timeless appeal.',
    footerCopy: '© 2025 RI7A.LUX. ALL RIGHTS RESERVED.',
    footerContact: 'CONTACT@RI7A.LUX | +212 726-482902'
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
    prod1Name: 'العود الملكي',
   prod1Desc: 'عطر أيقوني من العود والتوابل، لحضور لا يُنسى.',
prod2Name: 'الإمبراطوري الورد',
prod2Desc: 'مزج زهري رقيق من ورد غراس والفانيليا الفرنسية.',
prod3Name: 'الفاخر العنبر',
prod3Desc: 'دفء العنبر وخشب الصندل والباتشولي الأرضي الآسر.',
prod4Name: 'المركز الجلد',
prod4Desc: 'عطر جلدي جريء ممزوج بالبرغموت والتوابل الطازجة.',
prod5Name: 'الليل زهرة',
prod5Desc: 'مسك الروم والغاردينيا لعطر ليلي غامض.',
prod6Name: 'الغامض الخشب',
prod6Desc: 'عطر يونيسكس مُعقد من الأخشاب الجافة والبخور.',
orderNow: 'اطلب الآن',
aboutTitle: 'عن ريحة.لوكس',
aboutPara1: 'لأكثر من عقدين من الزمان، كانت ريحة.لوكس هي الوجهة الأولى لخبراء العطور.',
aboutPara2: 'يتم صياغة كل عطر بعناية لحرفيته وتراثه وجاذبيته الخالدة.',
footerCopy: '© 2025 جميع الحقوق ريحة.لوكس محفوظة.',
footerContact: 'CONTACT@RI7A.LUX | +212 726-482902'
  }
};

export default function Home() {
  // هادشي باش اللغة والاتجاه يتبدلو
  const [lang, setLang] = useState('fr');
  const [dir, setDir] = useState('ltr');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // ها هي RETURN اللي كنقلبو عليها
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      
      <h1 className="text-5xl font-bold text-red-600">
        TEST TAILWIND
      </h1>
      
      <p className="text-2xl text-blue-600 font-semibold">
        إلا بانت ليك هاد الكتابة كبيرة وملونة، راه Tailwind خدام مزيان
      </p>

      <div className="p-4 bg-white shadow-lg rounded-lg text-black">
        تجربة للكارد (Card) بالظل (Shadow)
      </div>

    </div>
  );
}