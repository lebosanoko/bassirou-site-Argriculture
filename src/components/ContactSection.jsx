import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Demande d\'informations',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      showToast("Veuillez remplir votre nom, téléphone et votre message.");
      return;
    }
    showToast("✉️ Message envoyé avec succès ! Nous vous recontacterons sous 24h.");
    setFormData({ name: '', email: '', phone: '', subject: 'Demande d\'informations', message: '' });
  };

  return (
    <section class="py-section" id="contact">
      <div class="container">
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span class="section-tag">Restons en Contact</span>
          <h2 class="section-title">Venez nous rendre visite à la ferme</h2>
          <p class="section-subtitle">
            Une question sur nos colis de viande, la boutique ou la réservation de visites ? Envoyez-nous un message ou appelez-nous directement.
          </p>
        </div>

        <div class="contact-grid">
          {/* Form */}
          <div class="contact-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Envoyez-nous un message</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.92rem' }}>
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div class="form-group">
                  <label>Nom complet *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div class="form-group">
                  <label>Téléphone *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="06 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div class="form-group">
                  <label>Adresse Email</label>
                  <input 
                    type="email" 
                    placeholder="votre@email.fr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div class="form-group">
                  <label>Sujet de votre demande</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Demande d'informations">Demande d'informations</option>
                    <option value="Commande de colis de viande">Commande de colis de viande</option>
                    <option value="Visite de groupe / École">Visite de groupe / École</option>
                    <option value="Partenariat / Fourrage">Partenariat / Fourrage</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label>Votre message *</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Écrivez votre message ici..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" class="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                <Send size={18} />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>

          {/* Info */}
          <div class="contact-info-box">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Nos Coordonnées</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '28px', fontSize: '0.92rem' }}>
              La Ferme des 4 Saisons vous accueille toute l'année.
            </p>

            <div class="info-item-row">
              <div class="info-icon">
                <Phone size={22} />
              </div>
              <div class="info-details">
                <h4>Téléphone Direct</h4>
                <p>+33 (0)6 12 34 56 78</p>
                <span style={{ fontSize: '0.78rem', color: 'var(--brand-gold-500)' }}>Du Lundi au Samedi (8h - 19h)</span>
              </div>
            </div>

            <div class="info-item-row">
              <div class="info-icon">
                <Mail size={22} />
              </div>
              <div class="info-details">
                <h4>Adresse Email</h4>
                <p>contact@lafermedes4saisons.fr</p>
              </div>
            </div>

            <div class="info-item-row">
              <div class="info-icon">
                <MapPin size={22} />
              </div>
              <div class="info-details">
                <h4>Adresse de l'Exploitation</h4>
                <p>Route des Saisons, 75000 Campagne Fermière</p>
              </div>
            </div>

            <div class="info-item-row">
              <div class="info-icon">
                <Clock size={22} />
              </div>
              <div class="info-details">
                <h4>Vente à la Ferme</h4>
                <p>Mercredi & Samedi : 9h00 - 12h30 / 14h30 - 18h30</p>
              </div>
            </div>

            {/* Map */}
            <div class="map-wrapper">
              <iframe
                title="Carte de localisation de La Ferme des 4 Saisons"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=France&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
