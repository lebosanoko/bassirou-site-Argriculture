import React, { useState } from 'react';
import { Search, ShoppingBag, Eye, Star } from 'lucide-react';
import { FARM_PRODUCTS } from '../data/farmData';

export default function ShopCatalog({ onAddToCart, onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Tous nos produits' },
    { id: 'elevage', label: 'Élevage & Viande' },
    { id: 'polyculture', label: 'Polyculture & Céréales' },
    { id: 'produits-laitiers', label: 'Produits Laitiers & Miel' },
    { id: 'paniers', label: 'Paniers Bio' }
  ];

  const filteredProducts = FARM_PRODUCTS.filter(prod => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section class="py-section" id="boutique">
      <div class="container">
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span class="section-tag">Boutique & Vente Directe</span>
          <h2 class="section-title">Produits frais en direct de la ferme</h2>
          <p class="section-subtitle">
            Commandez vos colis de viande, fromages artisanaux, sacs de céréales et paniers bio directement auprès de notre exploitation.
          </p>
        </div>

        {/* Controls: Search & Category Filter */}
        <div class="catalog-controls">
          <div class="search-box">
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Rechercher un produit (viande, fromage, maïs...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div class="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                class={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div class="products-grid">
          {filteredProducts.map(product => (
            <article class="product-card" key={product.id}>
              <div class="product-img-wrapper">
                <img src={product.image} alt={product.title} loading="lazy" />
                {product.badge && <span class="product-badge">{product.badge}</span>}
                <button 
                  class="product-quick-view" 
                  onClick={() => onSelectProduct(product)}
                  title="Voir les détails"
                >
                  <Eye size={18} />
                </button>
              </div>

              <div class="product-info">
                <span class="product-cat-tag">{product.categoryLabel}</span>
                <h3 class="product-title" onClick={() => onSelectProduct(product)} style={{ cursor: 'pointer' }}>
                  {product.title}
                </h3>
                <p class="product-desc">{product.description}</p>

                <div class="product-footer" style={{ justifyContent: 'center' }}>
                  <button class="add-cart-btn" onClick={() => onAddToCart(product)}>
                    <ShoppingBag size={16} />
                    <span>Ajouter au panier</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.2rem' }}>Aucun produit ne correspond à votre recherche "{searchQuery}".</p>
            <button class="btn btn-outline" onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} style={{ marginTop: '16px' }}>
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
