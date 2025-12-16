
interface CategoriesProps {
  setView: (view: string) => void;
}


export default function Categories({ setView }: CategoriesProps) {
  return (
    <section className="categories-section" id="categoriesSection">
      <div className="categories-grid">
        
      
        <div className="category-card">
          <div style={{overflow: 'hidden', marginBottom: '25px'}}>
             <img src="/category_men_perfume.jpg" alt="Parfums Hommes" width="90%" />
          </div>
          <h3>Hommes</h3>
          <p>Collection exclusive de parfums masculins</p>
         
          <button className="category-btn" onClick={() => setView('men')}>Explorer</button>
        </div>

        {/* Femmes */}
        <div className="category-card">
          <div style={{overflow: 'hidden', marginBottom: '25px'}}>
            <img src="/category_women_perfume.jpg" alt="Parfums Femmes" width="90%" />
          </div>
          <h3>Femmes</h3>
          <p>Fragrances élégantes et captivantes</p>
          <button className="category-btn" onClick={() => setView('women')}>Explorer</button>
        </div>

        {/* Offres */}
        <div className="category-card">
          <div style={{overflow: 'hidden', marginBottom: '25px'}}>
            <img src="/category_offers_perfume.jpg" alt="Offres Parfums" width="90%" />
          </div>
          <h3>Offres</h3>
          <p>Promotions exclusives et coffrets</p>
          <button className="category-btn" onClick={() => setView('offers')}>Explorer</button>
        </div>

      </div>
    </section>
  )
}

