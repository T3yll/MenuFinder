import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Restaurants.css';

// Types de données
interface Restaurant {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  address: string;
  priceRange: string;
  openingHours: string;
  specialties: string[];
}

// Données de démonstration
const sampleRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Chez Mario",
    category: "italien",
    rating: 4.8,
    reviewCount: 132,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    address: "15 Rue de la Paix, 75002 Paris",
    priceRange: "€€",
    openingHours: "12h00 - 23h00",
    specialties: ["Pizza", "Pâtes", "Tiramisu"]
  },
  {
    id: 2,
    name: "Le Bistrot Français",
    category: "français",
    rating: 4.6,
    reviewCount: 98,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    address: "42 Rue du Faubourg Saint-Antoine, 75012 Paris",
    priceRange: "€€€",
    openingHours: "11h30 - 22h30",
    specialties: ["Bœuf bourguignon", "Coq au vin", "Crème brûlée"]
  },
  {
    id: 3,
    name: "Sushi House",
    category: "asiatique",
    rating: 4.7,
    reviewCount: 156,
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    address: "8 Rue de la Roquette, 75011 Paris",
    priceRange: "€€",
    openingHours: "11h00 - 22h00",
    specialties: ["Sushi", "Sashimi", "Ramen"]
  },
  {
    id: 4,
    name: "Burger Palace",
    category: "fastfood",
    rating: 4.3,
    reviewCount: 205,
    imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    address: "123 Avenue des Champs-Élysées, 75008 Paris",
    priceRange: "€",
    openingHours: "11h00 - 23h00",
    specialties: ["Burgers", "Frites", "Milkshakes"]
  },
  {
    id: 5,
    name: "Le Jardin Vert",
    category: "vegetarien",
    rating: 4.5,
    reviewCount: 87,
    imageUrl: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    address: "56 Rue Oberkampf, 75011 Paris",
    priceRange: "€€",
    openingHours: "12h00 - 21h30",
    specialties: ["Buddha bowl", "Salade composée", "Desserts vegan"]
  },
  {
    id: 6,
    name: "La Méditerranée",
    category: "méditerranéen",
    rating: 4.4,
    reviewCount: 112,
    imageUrl: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    address: "27 Rue de Rivoli, 75004 Paris",
    priceRange: "€€",
    openingHours: "12h00 - 22h30",
    specialties: ["Mezze", "Couscous", "Baklava"]
  },
  {
    id: 7,
    name: "Spicy Corner",
    category: "indien",
    rating: 4.6,
    reviewCount: 92,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    address: "18 Rue du Faubourg Saint-Denis, 75010 Paris",
    priceRange: "€€",
    openingHours: "12h00 - 23h00",
    specialties: ["Curry", "Naan", "Tandoori"]
  },
  {
    id: 8,
    name: "Tapas & Co",
    category: "espagnol",
    rating: 4.5,
    reviewCount: 78,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    address: "3 Rue de Buci, 75006 Paris",
    priceRange: "€€",
    openingHours: "18h00 - 00h00",
    specialties: ["Tapas", "Paella", "Sangria"]
  }
];

// Catégories disponibles
const categories = [
  { id: "all", name: "Tous", emoji: "🍽️" },
  { id: "français", name: "Français", emoji: "🥐" },
  { id: "italien", name: "Italien", emoji: "🍕" },
  { id: "asiatique", name: "Asiatique", emoji: "🍜" },
  { id: "japonais", name: "Japonais", emoji: "🍣" },
  { id: "chinois", name: "Chinois", emoji: "🥡" },
  { id: "thaï", name: "Thaï", emoji: "🍲" },
  { id: "fastfood", name: "Fast Food", emoji: "🍔" },
  { id: "vegetarien", name: "Végétarien", emoji: "🥗" },
  { id: "végétalien", name: "Végétalien", emoji: "🥬" },
  { id: "méditerranéen", name: "Méditerranéen", emoji: "🫒" },
  { id: "indien", name: "Indien", emoji: "🍛" },
  { id: "espagnol", name: "Espagnol", emoji: "🥘" },
  { id: "mexicain", name: "Mexicain", emoji: "🌮" },
  { id: "américain", name: "Américain", emoji: "🥪" },
  { id: "oriental", name: "Oriental", emoji: "🧆" },
  { id: "africain", name: "Africain", emoji: "🍖" },
  { id: "fruits_de_mer", name: "Fruits de mer", emoji: "🦞" },
  { id: "barbecue", name: "Barbecue", emoji: "🍗" },
  { id: "desserts", name: "Desserts", emoji: "🍰" }
];

const Restaurants: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(sampleRestaurants);
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

  // Effet pour filtrer les restaurants
  useEffect(() => {
    let filtered = sampleRestaurants;
    
    // Filtrer par catégorie
    if (selectedCategory !== "all") {
      filtered = filtered.filter(restaurant => restaurant.category === selectedCategory);
    }
    
    // Filtrer par recherche
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(restaurant => 
        restaurant.name.toLowerCase().includes(term) || 
        restaurant.address.toLowerCase().includes(term) || 
        restaurant.specialties.some(specialty => specialty.toLowerCase().includes(term))
      );
    }
    
    setFilteredRestaurants(filtered);
  }, [selectedCategory, searchTerm]);

  // Afficher les étoiles de notation
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let stars = [];
    
    // Étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
    
    // Demi-étoile si nécessaire
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    // Étoiles vides
    const emptyStarsCount = 5 - stars.length;
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="restaurants-page">      
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
      
      {/* Liste des restaurants */}
      <div className="restaurants-container">
        <div className="restaurants-grid">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map(restaurant => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="restaurant-image" style={{ backgroundImage: `url(${restaurant.imageUrl})` }}>
                  <div className="price-tag">{restaurant.priceRange}</div>
                </div>
                
                <div className="restaurant-content">
                  <h3 className="restaurant-name">{restaurant.name}</h3>
                  
                  <div className="restaurant-category">{categories.find(c => c.id === restaurant.category)?.name}</div>
                  
                  <div className="restaurant-rating">
                    <div className="stars">{renderStars(restaurant.rating)}</div>
                    <span className="reviews-count">({restaurant.reviewCount})</span>
                  </div>
                  
                  <div className="restaurant-address">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {restaurant.address}
                  </div>
                  
                  <div className="restaurant-hours">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {restaurant.openingHours}
                  </div>
                  
                  <div className="restaurant-specialties">
                    <strong>Spécialités:</strong> {restaurant.specialties.join(", ")}
                  </div>
                  
                  <div className="restaurant-actions">
                    <Link to={`/restaurants/${restaurant.id}`} className="view-menu-button">
                      Voir le menu
                    </Link>
                    <button className="save-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="15" x2="16" y2="15"></line>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
              <h3>Aucun restaurant trouvé</h3>
              <p>Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
