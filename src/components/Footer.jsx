import React from 'react';
import { Heart, Sprout } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="/logo-ferme-4-saisons.png" alt="Logo" style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#fff', padding: '2px' }} />
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>La Ferme des 4 Saisons</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Exploitation agricole familiale spécialisée en polyculture raisonnée et élevage d'animaux au grand air. Qualité, authenticité et passion au fil des 4 saisons.
            </p>
          </div>

          <div>
            <h4>Navigation rapide</h4>
            <ul class="footer-links">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#apropos">La Ferme</a></li>
              <li><a href="#services">Savoir-faire</a></li>
              <li><a href="#boutique">Boutique en ligne</a></li>
            </ul>
          </div>

          <div>
            <h4>Visites & Découverte</h4>
            <ul class="footer-links">
              <li><a href="#visites" onClick={onOpenBooking}>Visites guidées</a></li>
              <li><a href="#visites" onClick={onOpenBooking}>Atelier nourrissage</a></li>
              <li><a href="#galerie">Galerie de nos animaux</a></li>
              <li><a href="#avis">Avis clients</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact & Vente</h4>
            <ul class="footer-links">
              <li>📍 Route des Saisons, France</li>
              <li>📞 +33 (0)6 12 34 56 78</li>
              <li>✉️ contact@lafermedes4saisons.fr</li>
              <li>🛒 Vente en direct mercredi & samedi</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© {new Date().getFullYear()} La Ferme des 4 Saisons. Tous droits réservés.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Conçu avec passion pour la terre</span>
            <Sprout size={16} color="var(--brand-gold-500)" />
          </div>
        </div>
      </div>
    </footer>
  );
}
