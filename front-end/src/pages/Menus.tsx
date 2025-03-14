import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Menus.css';

// Interface pour les menus
interface Menu {
  id: number;
  name: string;
  restaurantName: string;
  restaurantId: number;
  category: string;
  price: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  tags: string[];
}

// Données d'exemple pour les menus
const sampleMenus: Menu[] = [
  {
    id: 1,
    name: "Menu Classique",
    restaurantName: "Chez Maurice",
    restaurantId: 101,
    category: "français",
    price: "€€",
    rating: 4.7,
    reviewCount: 128,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
    description: "Entrée, plat, dessert au choix de notre carte du jour. Boisson non comprise.",
    tags: ["traditionnel", "fait maison", "produits locaux"]
  },
  {
    id: 2,
    name: "Menu Pizza Party",
    restaurantName: "Pizzeria Bella",
    restaurantId: 102,
    category: "italien",
    price: "€",
    rating: 4.5,
    reviewCount: 213,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop",
    description: "Pizza au choix parmi notre sélection, boisson et dessert inclus.",
    tags: ["pizza", "italien", "familial"]
  },
  {
    id: 3,
    name: "Menu Dégustation",
    restaurantName: "L'Étoile",
    restaurantId: 103,
    category: "français",
    price: "€€€",
    rating: 4.9,
    reviewCount: 87,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    description: "Menu 5 plats avec accord mets-vins, créé par notre chef étoilé.",
    tags: ["gastronomique", "chef étoilé", "accord mets-vins"]
  },
  {
    id: 4,
    name: "Menu Sushi",
    restaurantName: "Sushi House",
    restaurantId: 104,
    category: "japonais",
    price: "€€",
    rating: 4.6,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
    description: "Assortiment de 16 pièces de sushi avec soupe miso et thé vert.",
    tags: ["japonais", "sushi", "frais"]
  },
  {
    id: 5,
    name: "Menu Vegan",
    restaurantName: "Green Garden",
    restaurantId: 105,
    category: "végétalien",
    price: "€€",
    rating: 4.8,
    reviewCount: 92,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2068&auto=format&fit=crop",
    description: "Menu 100% végétal, local et de saison. Entrée, plat et dessert.",
    tags: ["vegan", "bio", "local"]
  },
  {
    id: 6,
    name: "Menu Burger Deluxe",
    restaurantName: "Burger Factory",
    restaurantId: 106,
    category: "fastfood",
    price: "€",
    rating: 4.3,
    reviewCount: 237,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop",
    description: "Burger au choix avec frites, boisson et dessert.",
    tags: ["burger", "fast-food", "américain"]
  },
  {
    id: 7,
    name: "Menu Brunch",
    restaurantName: "Café Central",
    restaurantId: 107,
    category: "café",
    price: "€€",
    rating: 4.7,
    reviewCount: 183,
    image: "https://images.unsplash.com/photo-1533089860892-a9b969df47bc?q=80&w=2070&auto=format&fit=crop",
    description: "Brunch complet avec boissons chaudes à volonté, servi jusqu'à 14h.",
    tags: ["brunch", "café", "week-end"]
  },
  {
    id: 8,
    name: "Menu Tapas",
    restaurantName: "El Barrio",
    restaurantId: 108,
    category: "espagnol",
    price: "€€",
    rating: 4.6,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2070&auto=format&fit=crop",
    description: "Sélection de 8 tapas à partager avec une bouteille de sangria.",
    tags: ["tapas", "espagnol", "à partager"]
  },
  {
    id: 9,
    name: "Menu Indien Royal",
    restaurantName: "Taj Mahal",
    restaurantId: 109,
    category: "indien",
    price: "€€",
    rating: 4.8,
    reviewCount: 112,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    description: "Thali royal avec naan, riz basmati et assortiment de currys.",
    tags: ["indien", "épicé", "curry"]
  },
  {
    id: 10,
    name: "Menu Enfant",
    restaurantName: "Family Kitchen",
    restaurantId: 110,
    category: "familial",
    price: "€",
    rating: 4.4,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1674315044080-80f13a01403a?q=80&w=2070&auto=format&fit=crop",
    description: "Menu spécial enfants avec surprise et boisson incluse.",
    tags: ["enfants", "familial", "accessible"]
  }
];

// Catégories disponibles
const categories = [
  { id: "all", name: "Tous", emoji: "🍽️" },
  { id: "français", name: "Français", emoji: "🥐" },
  { id: "italien", name: "Italien", emoji: "🍕" },
  { id: "japonais", name: "Japonais", emoji: "🍣" },
  { id: "végétalien", name: "Végétalien", emoji: "🥬" },
  { id: "fastfood", name: "Fast Food", emoji: "🍔" },
  { id: "café", name: "Café", emoji: "☕" },
  { id: "espagnol", name: "Espagnol", emoji: "🥘" },
  { id: "indien", name: "Indien", emoji: "🍛" },
  { id: "familial", name: "Familial", emoji: "👨‍👩‍👧‍👦" },
  { id: "enfant", name: "Enfant", emoji: "🧑‍🎂" },
  { id: "accessible", name: "Accessible", emoji: "👨‍👩‍👧‍👦" },
  { id: "week-end", name: "Week-End", emoji: "🍽️" },
  { id: "autre", name: "Autre", emoji: "🍽️" },
  { id: "boisson", name: "Boisson", emoji: "🍻" },
  { id: "dessert", name: "Dessert", emoji: "🍩" },
  { id: "menu", name: "Menu", emoji: "🍽️" },
  { id: "alimentation", name: "Alimentation", emoji: "🥗" }

];

const Menus: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredMenus, setFilteredMenus] = useState<Menu[]>(sampleMenus);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Référence pour le slider de catégories
  const categorySliderRef = useRef<HTMLDivElement>(null);

  // Fonction pour faire défiler le slider
  const scrollSlider = (direction: 'left' | 'right') => {
    if (categorySliderRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'right' 
        ? categorySliderRef.current.scrollLeft + scrollAmount 
        : categorySliderRef.current.scrollLeft - scrollAmount;
      
      categorySliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Effet pour filtrer les menus
  useEffect(() => {
    let filtered = sampleMenus;
    
    // Filtrer par catégorie
    if (selectedCategory !== "all") {
      filtered = filtered.filter(menu => menu.category === selectedCategory);
    }
    
    // Filtrer par terme de recherche
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(menu => 
        menu.name.toLowerCase().includes(term) ||
        menu.restaurantName.toLowerCase().includes(term) ||
        menu.description.toLowerCase().includes(term) ||
        menu.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredMenus(filtered);
  }, [selectedCategory, searchTerm]);

  // Fonction pour rendre les étoiles de notation
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star">★</span>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">★</span>);
      }
    }
    
    return stars;
  };

  return (
    <div className="menus-page">
      <div className="menus-hero">
        <div className="hero-content">
          <h1>Découvrez nos menus</h1>
          <p>Trouvez facilement le menu idéal pour votre prochain repas</p>
          
          {/* Barre de recherche */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher un menu, un restaurant, un type de cuisine..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Slider de catégories */}
      <div className="category-slider-container">
        <div className="category-slider-wrapper">
          <div className="category-slider" ref={categorySliderRef}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-emoji">{category.emoji}</span>
                {category.name}
              </button>
            ))}
          </div>
          <button 
            className="slider-arrow slider-arrow-left" 
            onClick={() => scrollSlider('left')}
            aria-label="Voir moins de catégories"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="slider-arrow slider-arrow-right" 
            onClick={() => scrollSlider('right')}
            aria-label="Voir plus de catégories"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Conteneur des menus */}
      <div className="menus-container">
        <h2 className="section-title">Nos menus {selectedCategory !== "all" ? categories.find(c => c.id === selectedCategory)?.name : ""}</h2>
        
        {filteredMenus.length > 0 ? (
          <div className="menus-grid">
            {filteredMenus.map(menu => (
              <div key={menu.id} className="menu-card">
                <div className="menu-image" style={{ backgroundImage: `url(${menu.image})` }}>
                  <div className="price-tag">{menu.price}</div>
                </div>
                <div className="menu-content">
                  <h3 className="menu-name">{menu.name}</h3>
                  <p className="restaurant-name">
                    <Link to={`/restaurants/${menu.restaurantId}`}>{menu.restaurantName}</Link>
                  </p>
                  <div className="menu-category">{menu.category}</div>
                  <div className="menu-rating">
                    <div className="stars">
                      {renderStars(menu.rating)}
                    </div>
                    <span className="reviews-count">({menu.reviewCount})</span>
                  </div>
                  <p className="menu-description">{menu.description}</p>
                  <div className="menu-tags">
                    {menu.tags.map((tag, index) => (
                      <span key={index} className="menu-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="menu-actions">
                    <Link to={`/menus/${menu.id}`} className="view-details-button">
                      Voir les détails
                    </Link>
                    <button className="save-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <h3>Aucun menu trouvé</h3>
            <p>Nous n'avons pas trouvé de menu correspondant à votre recherche. Essayez d'autres termes ou catégories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menus;
