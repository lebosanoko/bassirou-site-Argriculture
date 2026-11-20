import React from 'react';
import { ShoppingCart, Calendar, ArrowRight, Award, Sprout, Heart } from 'lucide-react';
import { FARM_STATS } from '../data/farmData';

export default function Hero({ onOpenBooking }) {
  return (
    <section class="hero-section" id="accueil">
      <div class="container">
        <div class="hero-content">
          <div class="hero-pill">
            <Sprout size={16} color="#d99b26" />
            <span>Exploitation Agricole Familiale & Élevage Responsable</span>
          </div>

          <h1 class="hero-title">
            L'authenticité de la terre au fil des <span>4 Saisons</span>
          </h1>

          <p class="hero-description">
            Bienvenue sur le domaine de La Ferme des 4 Saisons. Découvrez nos produits fermiers récoltés avec passion, nos animaux élevés au grand air et réservez votre immersion au cœur de la polyculture.
          </p>

          <div class="hero-actions">
            <a href="#boutique" class="btn btn-primary">
              <ShoppingCart size={18} />
              <span>Commander nos produits</span>
            </a>

            <button class="btn btn-outline" onClick={onOpenBooking} style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)' }}>
              <Calendar size={18} />
              <span>Réserver une visite guidée</span>
            </button>
          </div>

          <div class="hero-stats-grid">
            {FARM_STATS.map((stat, idx) => (
              <div class="hero-stat-card" key={idx}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
