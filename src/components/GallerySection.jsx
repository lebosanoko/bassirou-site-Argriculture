import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/farmData';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const categories = [
    { id: 'all', label: 'Toutes les photos' },
    { id: 'chevaux', label: 'Nos Chevaux' },
    { id: 'chevres', label: 'Nos Chèvres' },
    { id: 'cochons', label: 'Nos Cochons' },
    { id: 'moutons', label: 'Nos Moutons' },
    { id: 'veaux', label: 'Nos Veaux' }
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section class="py-section" id="galerie">
      <div class="container">
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span class="section-tag">Photothèque & Exploitation</span>
          <h2 class="section-title">Galerie photo de La Ferme des 4 Saisons</h2>
          <p class="section-subtitle">
            Explorez notre élevage en images réelles : moments de complicité avec nos animaux et panoramas de nos terres.
          </p>
        </div>

        {/* Category Filters */}
        <div class="gallery-filter-bar">
          {categories.map(cat => (
            <button
              key={cat.id}
              class={`cat-tab ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div class="gallery-grid">
          {filteredItems.map(item => (
            <div class="gallery-card" key={item.id} onClick={() => setActiveImage(item)}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div class="gallery-overlay">
                <h4>{item.title}</h4>
                <p>{item.caption}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px', fontSize: '0.8rem', color: 'var(--brand-gold-500)' }}>
                  <Maximize2 size={14} />
                  <span>Agrandir</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div class="modal-overlay" onClick={() => setActiveImage(null)}>
            <div 
              class="modal-content" 
              onClick={(e) => e.stopPropagation()} 
              style={{ maxWidth: '850px', padding: '16px', background: '#0a160d', color: '#ffffff' }}
            >
              <button class="modal-close-btn" onClick={() => setActiveImage(null)} style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                <X size={20} />
              </button>

              <div style={{ maxHeight: '70vh', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
                <img src={activeImage.image} alt={activeImage.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>

              <div style={{ padding: '0 12px 12px' }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: '6px' }}>{activeImage.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{activeImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
