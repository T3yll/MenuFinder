import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // États pour le slider et la page restaurant
  const [accountType, setAccountType] = useState('client');
  const [currentStep, setCurrentStep] = useState(1);
  
  // États supplémentaires pour le compte restaurant
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [restaurantPhone, setRestaurantPhone] = useState('');
  const [restaurantCategory, setRestaurantCategory] = useState('');
  const [restaurantDescription, setRestaurantDescription] = useState('');

  const validateClientForm = () => {
    if (!name.trim()) {
      setError('Veuillez saisir votre nom.');
      return false;
    }
    
    if (!email.trim()) {
      setError('Veuillez saisir votre email.');
      return false;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Veuillez saisir un email valide.');
      return false;
    }
    
    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return false;
    }
    
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return false;
    }
    
    if (!agreeTerms) {
      setError('Vous devez accepter les conditions d\'utilisation.');
      return false;
    }
    
    return true;
  };
  
  const validateRestaurantForm = () => {
    if (!restaurantName.trim()) {
      setError('Veuillez saisir le nom de votre restaurant.');
      return false;
    }
    
    if (!restaurantAddress.trim()) {
      setError('Veuillez saisir l\'adresse de votre restaurant.');
      return false;
    }
    
    if (!restaurantPhone.trim()) {
      setError('Veuillez saisir le numéro de téléphone de votre restaurant.');
      return false;
    }
    
    if (!restaurantCategory.trim()) {
      setError('Veuillez sélectionner une catégorie pour votre restaurant.');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (accountType === 'restaurant' && currentStep === 1) {
      if (validateClientForm()) {
        setCurrentStep(2);
      }
      return;
    }
    
    let isValid = validateClientForm();
    
    if (accountType === 'restaurant' && currentStep === 2) {
      isValid = isValid && validateRestaurantForm();
    }
    
    if (!isValid) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Ici vous ajouteriez la logique d'inscription avec une API
      if (accountType === 'client') {
        console.log('Inscription client avec:', { name, email, password, agreeTerms });
      } else {
        console.log('Inscription restaurant avec:', { 
          name, 
          email, 
          password, 
          agreeTerms,
          restaurantName,
          restaurantAddress,
          restaurantPhone,
          restaurantCategory,
          restaurantDescription
        });
      }
      
      // Simuler un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirection après inscription réussie (à implémenter)
    } catch (err) {
      setError('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
  const switchAccountType = (type: string) => {
    setAccountType(type);
    setCurrentStep(1);
    setError('');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          <div className="register-header">
            <Link to="/" className="back-to-home">
              <span className="back-arrow">←</span> Retour à l'accueil
            </Link>
            <h1 className="register-title">Inscription</h1>
            <p className="register-subtitle">Créez votre compte MenuFinder</p>
            
            {/* Slider pour choisir le type de compte */}
            <div className="account-type-slider">
              <div className={`account-type-track ${accountType === 'restaurant' ? 'restaurant-selected' : ''}`}>
                <button 
                  type="button" 
                  className={`account-type-option ${accountType === 'client' ? 'selected' : ''}`}
                  onClick={() => switchAccountType('client')}
                >
                  Client
                </button>
                <button 
                  type="button" 
                  className={`account-type-option ${accountType === 'restaurant' ? 'selected' : ''}`}
                  onClick={() => switchAccountType('restaurant')}
                >
                  Restaurant
                </button>
                <div className="slider-indicator"></div>
              </div>
            </div>
          </div>
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="register-form">
            {/* Étape 1: Informations de base (communes) */}
            {currentStep === 1 && (
              <>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nom complet</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <div className="input-container">
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Mot de passe</label>
                  <div className="input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="form-input password-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="********"
                    />
                    <button 
                      type="button" 
                      className="password-toggle-btn"
                      onClick={togglePasswordVisibility}
                      aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                  <small className="password-hint">8 caractères minimum</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                  <div className="input-container">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      className="form-input password-input"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="********"
                    />
                    <button 
                      type="button" 
                      className="password-toggle-btn"
                      onClick={toggleConfirmPasswordVisibility}
                      aria-label={showConfirmPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    >
                      {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="terms-checkbox">
                    <input 
                      type="checkbox" 
                      className="custom-checkbox"
                      checked={agreeTerms}
                      onChange={() => setAgreeTerms(!agreeTerms)}
                    />
                    <span className="checkmark"></span>
                    J'accepte les <Link to="/terms" className="terms-link">conditions d'utilisation</Link> et la <Link to="/privacy" className="terms-link">politique de confidentialité</Link>
                  </label>
                </div>
              </>
            )}
            
            {/* Étape 2: Informations spécifiques au restaurant */}
            {accountType === 'restaurant' && currentStep === 2 && (
              <>
                <div className="step-indicator">Étape 2/2: Informations du restaurant</div>
                
                <div className="form-group">
                  <label htmlFor="restaurantName" className="form-label">Nom du restaurant</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="restaurantName"
                      className="form-input"
                      value={restaurantName}
                      onChange={(e) => setRestaurantName(e.target.value)}
                      required
                      placeholder="Nom de votre restaurant"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="restaurantAddress" className="form-label">Adresse</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="restaurantAddress"
                      className="form-input"
                      value={restaurantAddress}
                      onChange={(e) => setRestaurantAddress(e.target.value)}
                      required
                      placeholder="Adresse complète du restaurant"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="restaurantPhone" className="form-label">Téléphone</label>
                  <div className="input-container">
                    <input
                      type="tel"
                      id="restaurantPhone"
                      className="form-input"
                      value={restaurantPhone}
                      onChange={(e) => setRestaurantPhone(e.target.value)}
                      required
                      placeholder="Numéro de téléphone"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="restaurantCategory" className="form-label">Catégorie</label>
                  <div className="input-container">
                    <select
                      id="restaurantCategory"
                      className="form-input"
                      value={restaurantCategory}
                      onChange={(e) => setRestaurantCategory(e.target.value)}
                      required
                    >
                      <option value="">Sélectionnez une catégorie</option>
                      <option value="italien">Italien</option>
                      <option value="français">Français</option>
                      <option value="asiatique">Asiatique</option>
                      <option value="fastfood">Fast Food</option>
                      <option value="vegetarien">Végétarien</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="restaurantDescription" className="form-label">Description</label>
                  <div className="input-container">
                    <textarea
                      id="restaurantDescription"
                      className="form-input form-textarea"
                      value={restaurantDescription}
                      onChange={(e) => setRestaurantDescription(e.target.value)}
                      placeholder="Décrivez brièvement votre restaurant"
                      rows={4}
                    />
                  </div>
                </div>
              </>
            )}
            
            <div className="form-actions">
              {accountType === 'restaurant' && currentStep === 2 && (
                <div className="button-group">
                  <button
                    type="button"
                    className="back-button"
                    onClick={() => setCurrentStep(1)}
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    className="register-button"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Traitement en cours...' : 'Créer un compte'}
                  </button>
                </div>
              )}
              
              {(accountType === 'client' || currentStep === 1) && (
                <button
                  type="submit"
                  className="register-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Traitement en cours...' : 
                    (accountType === 'restaurant' && currentStep === 1) ? 'Suivant' : 'Créer un compte'}
                </button>
              )}
            </div>
          </form>
          
          <div className="register-footer">
            <p>Vous avez déjà un compte ? <Link to="/login" className="login-link">Se connecter</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
