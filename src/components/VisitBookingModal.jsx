import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, Ticket, Heart } from 'lucide-react';
import { FARM_VISITS } from '../data/farmData';

export default function VisitBookingModal({ isOpen, onClose, showToast }) {
  const [selectedVisit, setSelectedVisit] = useState(FARM_VISITS[0]);
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('10:30');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!visitDate || !visitorName || !visitorPhone) {
      showToast("Veuillez remplir la date, votre nom et téléphone.");
      return;
    }
    setBooked(true);
    showToast("🎉 Réservation enregistrée avec succès !");
  };

  const handleReset = () => {
    setBooked(false);
    onClose();
  };

  return (
    <div class="modal-overlay" onClick={onClose}>
      <div class="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        <button class="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {booked ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <Ticket size={64} color="var(--brand-gold-500)" style={{ marginBottom: '16px' }} />
            <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Votre Ticket de Visite est prêt !</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Nous vous attendons à la ferme avec plaisir, <strong>{visitorName}</strong> !
            </p>

            <div style={{ background: 'var(--bg-tertiary)', padding: '24px', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '24px', display: 'grid', gap: '12px' }}>
              <h4 style={{ color: 'var(--brand-green-900)', fontSize: '1.1rem' }}>{selectedVisit.title}</h4>
              <div><strong>Date :</strong> {visitDate} à {visitTime}</div>
              <div><strong>Participants :</strong> {adults} Adulte(s), {children} Enfant(s)</div>
              <div><strong>Durée :</strong> {selectedVisit.duration}</div>
              <div><strong>Contact :</strong> {visitorPhone} ({visitorEmail || 'SMS envoyé'})</div>
            </div>

            <button class="btn btn-primary" onClick={handleReset} style={{ width: '100%' }}>
              Fermer et revenir au site
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Calendar size={26} color="var(--brand-gold-500)" />
              <h2 style={{ fontSize: '1.5rem' }}>Réservation d'Immersion à la Ferme</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
              Choisissez le parcours de votre choix pour découvrir nos animaux et nos cultures.
            </p>

            <form onSubmit={handleSubmitBooking}>
              {/* Type de visite */}
              <div class="form-group">
                <label>Sélectionnez l'Atelier / Visite *</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
                  {FARM_VISITS.map(v => (
                    <div 
                      key={v.id}
                      onClick={() => setSelectedVisit(v)}
                      style={{
                        padding: '14px',
                        borderRadius: 'var(--radius-md)',
                        border: selectedVisit.id === v.id ? '2px solid var(--brand-gold-500)' : '1px solid var(--border-color)',
                        background: selectedVisit.id === v.id ? 'var(--brand-gold-100)' : 'var(--bg-primary)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--brand-green-900)' }}>{v.title}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>⏱ {v.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Heure */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div class="form-group">
                  <label>Date de la visite *</label>
                  <input 
                    type="date" 
                    required
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                  />
                </div>

                <div class="form-group">
                  <label>Créneau Horaire *</label>
                  <select value={visitTime} onChange={(e) => setVisitTime(e.target.value)}>
                    <option value="10:00">10h00 (Matin)</option>
                    <option value="14:30">14h30 (Après-midi)</option>
                    <option value="17:00">17h00 (Soir - Nourrissage & Traite)</option>
                  </select>
                </div>
              </div>

              {/* Nombre de personnes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div class="form-group">
                  <label>Adultes</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
                  />
                </div>

                <div class="form-group">
                  <label>Enfants</label>
                  <input 
                    type="number" 
                    min="0" 
                    max="10" 
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>

              {/* Coordonnées */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div class="form-group">
                  <label>Nom complet *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Votre nom"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                  />
                </div>

                <div class="form-group">
                  <label>Téléphone *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="06 00 00 00 00"
                    value={visitorPhone}
                    onChange={(e) => setVisitorPhone(e.target.value)}
                  />
                </div>
              </div>

              {/* Total & Submit */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <button type="submit" class="btn btn-primary">
                  <span>Confirmer ma réservation</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
