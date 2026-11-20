import React, { useState } from 'react';
import { Star, MessageSquarePlus, Send } from 'lucide-react';
import { TESTIMONIALS } from '../data/farmData';

export default function Testimonials({ showToast }) {
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Visiteur');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(5);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!name || !comment) {
      showToast("Veuillez remplir votre nom et votre commentaire.");
      return;
    }
    const newRev = {
      id: `t-${Date.now()}`,
      author: name,
      role: role,
      stars: stars,
      comment: comment,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
    };

    setReviews([newRev, ...reviews]);
    setShowAddModal(false);
    setName('');
    setComment('');
    showToast("❤️ Merci ! Votre avis a été publié.");
  };

  return (
    <section class="py-section bg-alt" id="avis">
      <div class="container">
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span class="section-tag">Avis & Retours</span>
          <h2 class="section-title">Ce que disent nos visiteurs & clients</h2>
          <p class="section-subtitle">
            La satisfaction de nos visiteurs et de notre communauté locale est notre plus belle récompense au quotidien.
          </p>
        </div>

        <div class="testimonials-grid">
          {reviews.map(item => (
            <div class="testimonial-card" key={item.id}>
              <div class="testimonial-stars">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p class="testimonial-comment">"{item.comment}"</p>

              <div class="testimonial-author-box">
                <img src={item.avatar} alt={item.author} />
                <div class="author-info">
                  <h4>{item.author}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button class="btn btn-outline" onClick={() => setShowAddModal(true)}>
            <MessageSquarePlus size={18} />
            <span>Laisser mon avis sur la ferme</span>
          </button>
        </div>

        {/* Modal Nouveau Témoignage */}
        {showAddModal && (
          <div class="modal-overlay" onClick={() => setShowAddModal(false)}>
            <div class="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Laisser votre avis</h3>

              <form onSubmit={handleAddReview}>
                <div class="form-group">
                  <label>Votre Nom *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex: Marie Martin"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div class="form-group">
                  <label>Votre Statut</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Client boutique, Visiteur famille..."
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>

                <div class="form-group">
                  <label>Note (Étoiles)</label>
                  <select value={stars} onChange={(e) => setStars(parseInt(e.target.value))}>
                    <option value={5}>★★★★★ (5/5)</option>
                    <option value={4}>★★★★☆ (4/5)</option>
                    <option value={3}>★★★☆☆ (3/5)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Votre Message / Avis *</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Racontez votre expérience à La Ferme des 4 Saisons..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '20px' }}>
                  <button type="button" class="btn btn-outline" onClick={() => setShowAddModal(false)}>
                    Annuler
                  </button>
                  <button type="submit" class="btn btn-primary">
                    <Send size={16} />
                    <span>Publier</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
