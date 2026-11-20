import React, { useState } from 'react';
import { ShoppingBag, Sun, Moon, Menu, X, Calendar, Phone, MapPin, Clock } from 'lucide-react';

export default function Header({ cartCount, onOpenCart, onOpenBooking, theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header-wrapper">
      {/* Top Utility Announcement Bar */}
      <div className="top-utility-bar">
        <div className="container top-utility-container">
          <div className="utility-left">
            <span className="utility-item">
              <MapPin size={14} color="var(--brand-gold-500)" />
              <span>Route des Saisons, France</span>
            </span>
            <span className="utility-item">
              <Clock size={14} color="var(--brand-gold-500)" />
              <span>Ouvert Mer. & Sam. (9h - 18h30)</span>
            </span>
          </div>

          <div className="utility-right">
            <a href="tel:+33612345678" className="utility-item phone-link">
              <Phone size={14} color="var(--brand-gold-500)" />
              <span>+33 (0)6 12 34 56 78</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="header-bar">
        <div className="container nav-container">
          <a href="#accueil" className="brand-logo">
            <img src="/logo-ferme-4-saisons.png" alt="La Ferme des 4 Saisons Logo" />
            <div className="brand-info">
              <span className="brand-name">La Ferme des 4 Saisons</span>
              <span className="brand-sub">Polyculture • Élevage • Vente Directe</span>
            </div>
          </a>

          <nav className={`nav-links-wrapper ${mobileOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#accueil" onClick={() => setMobileOpen(false)}>Accueil</a></li>
              <li><a href="#apropos" onClick={() => setMobileOpen(false)}>La Ferme</a></li>
              <li><a href="#services" onClick={() => setMobileOpen(false)}>Savoir-faire</a></li>
              <li><a href="#boutique" onClick={() => setMobileOpen(false)}>Boutique</a></li>
              <li><a href="#visites" onClick={() => setMobileOpen(false)}>Visites & Ateliers</a></li>
              <li><a href="#galerie" onClick={() => setMobileOpen(false)}>Galerie</a></li>
              <li><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button 
              className="theme-toggle-btn" 
              onClick={toggleTheme} 
              title={theme === 'dark' ? "Passer en mode clair" : "Passer en mode sombre"}
              aria-label="Basculer le thème"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="btn btn-booking-header" onClick={onOpenBooking}>
              <Calendar size={16} />
              <span>Réserver une visite</span>
            </button>

            <button className="cart-icon-btn" onClick={onOpenCart} aria-label="Voir le panier">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu Mobile">
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
