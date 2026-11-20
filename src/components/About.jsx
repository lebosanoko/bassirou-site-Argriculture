import React from 'react';
import { HeartHandshake, ShieldCheck, SunMedium } from 'lucide-react';

export default function About() {
  return (
    <section class="py-section" id="apropos">
      <div class="container">
        <div class="about-grid">
          <div class="about-images-wrapper">
            <img 
              src="/veau-1.jpeg" 
              alt="Vue panoramique de La Ferme des 4 Saisons" 
              class="about-main-img"
            />
            <div class="about-floating-card">
              <div class="floating-icon">🌱</div>
              <div>
                <strong style={{ display: 'block', fontSize: '1rem' }}>Savoir-faire Transmis</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Troisième génération de passionnés</span>
              </div>
            </div>
          </div>

          <div>
            <span class="section-tag">Notre Histoire & Valeurs</span>
            <h2 class="section-title">Une exploitation vivante ancrée dans la terre</h2>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '18px', fontSize: '1.05rem' }}>
              La Ferme des 4 Saisons est née de l'amour du travail bien fait et du respect fondamental des cycles naturels. Nous combinons polyculture raisonnée et élevage éthique pour proposer le meilleur de nos terroirs.
            </p>

            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
              Nos animaux bénéficient d'immenses prairies de fauche et d'une alimentation saine produite directement sur nos 85 hectares de culture. Tout au long de l'année, nous ouvrons nos portes aux familles et amoureux de la nature.
            </p>

            <div class="about-cards-list">
              <div class="about-mini-card">
                <HeartHandshake size={28} color="#d99b26" style={{ marginBottom: '10px' }} />
                <h4>Polyculture Bio</h4>
                <p>Rotation des sols et respect de la biodiversité.</p>
              </div>

              <div class="about-mini-card">
                <ShieldCheck size={28} color="#2d5a39" style={{ marginBottom: '10px' }} />
                <h4>Bien-être Animal</h4>
                <p>Élevage sur paille et pâturage en plein air.</p>
              </div>

              <div class="about-mini-card">
                <SunMedium size={28} color="#d99b26" style={{ marginBottom: '10px' }} />
                <h4>Vente en Direct</h4>
                <p>Circuit ultra-court de la ferme à votre assiette.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
