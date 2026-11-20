import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ShopCatalog from './components/ShopCatalog';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import VisitBookingModal from './components/VisitBookingModal';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { FARM_VISITS } from './data/farmData';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Apply dark/light theme to html root tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const showToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    showToast(`🛒 ${product.title} ajouté au panier !`);
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems(prev =>
        prev.map(item => (item.id === productId ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-main">
      <Header 
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      <About />

      <Services />

      <ShopCatalog 
        onAddToCart={handleAddToCart}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      {/* Visites & Ateliers Section Preview */}
      <section className="py-section bg-alt" id="visites">
        <div className="container">
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="section-tag">Expériences & Immersion</span>
            <h2 className="section-title">Venez vivre la ferme de l'intérieur</h2>
            <p className="section-subtitle">
              Réservez votre atelier en famille : nourrissage des chevreaux, traite des chèvres et balades au milieu de nos cultures.
            </p>
          </div>

          <div className="visits-grid">
            {FARM_VISITS.map(visit => (
              <article className="visit-card" key={visit.id}>
                <div className="visit-img-box">
                  <img src={visit.image} alt={visit.title} loading="lazy" />
                  <span className="visit-duration-badge">⏱ {visit.duration}</span>
                </div>
                <div className="visit-body">
                  <h3 className="visit-title">{visit.title}</h3>
                  <p className="visit-desc">{visit.description}</p>

                  <ul className="visit-highlights">
                    {visit.highlights.map((h, i) => (
                      <li key={i}>✓ {h}</li>
                    ))}
                  </ul>

                  <div className="visit-footer">
                    <button className="btn btn-primary" onClick={() => setIsBookingOpen(true)} style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                      <Calendar size={16} />
                      <span>Réserver</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      <Testimonials showToast={showToast} />

      <ContactSection showToast={showToast} />

      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Modals & Drawers */}
      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        showToast={showToast}
      />

      <VisitBookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        showToast={showToast}
      />

      <Toast toasts={toasts} />
    </div>
  );
}
