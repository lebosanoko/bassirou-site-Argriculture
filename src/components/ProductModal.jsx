import React from 'react';
import { X, ShoppingBag, Star, CheckCircle, ShieldCheck, MapPin, Calendar } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div class="modal-overlay" onClick={onClose}>
      <div class="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        <button class="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '300px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span class="section-tag" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
              {product.categoryLabel}
            </span>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{product.title}</h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', color: 'var(--brand-gold-500)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{product.rating}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>({product.reviewsCount} avis certifiés)</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.6 }}>
              {product.description}
            </p>

            <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '24px', display: 'grid', gap: '10px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--brand-green-700)" />
                <span><strong>Origine :</strong> {product.origin}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={16} color="var(--brand-gold-500)" />
                <span><strong>Saisonnalité :</strong> {product.seasonal}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--brand-green-700)" />
                <span><strong>Disponibilité :</strong> {product.stock > 0 ? `${product.stock} unités en stock à la ferme` : 'Sur réservation'}</span>
              </div>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
              <button class="btn btn-primary" onClick={() => { onAddToCart(product); onClose(); }}>
                <ShoppingBag size={18} />
                <span>Ajouter au panier</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
