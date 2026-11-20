import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, CheckCircle, ArrowRight, FileText } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onClearCart, showToast }) {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      showToast("Veuillez renseigner votre nom et téléphone.");
      return;
    }
    setOrderConfirmed(true);
    showToast("🎉 Commande envoyée à la ferme avec succès !");
  };

  const handleFinish = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <>
      <div class="cart-drawer-overlay" onClick={onClose}></div>
      <div class="cart-drawer">
        <div class="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} color="var(--brand-gold-500)" />
            <h3 style={{ fontSize: '1.2rem' }}>Votre Panier Fermier</h3>
          </div>
          <button class="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {orderConfirmed ? (
          <div class="drawer-body" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: '36px' }}>
            <CheckCircle size={64} color="var(--brand-green-700)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Commande confirmée !</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>
              Merci <strong>{customerName}</strong>. Notre équipe prépare vos produits. Vous recevrez un SMS au <strong>{customerPhone}</strong> dès que votre commande sera prête à la ferme.
            </p>

            <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)', width: '100%', textAlign: 'left', marginBottom: '24px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 700 }}>
                <FileText size={16} />
                <span>Reçu de commande #FERME-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Nombre d'articles :</span>
                <strong>{cartItems.reduce((acc, i) => acc + i.quantity, 0)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: 800, color: 'var(--brand-green-900)' }}>
                <span>Nombre d'articles commandés :</span>
                <strong>{cartItems.reduce((acc, i) => acc + i.quantity, 0)}</strong>
              </div>
            </div>

            <button class="btn btn-primary" onClick={handleFinish} style={{ width: '100%' }}>
              Retour au site
            </button>
          </div>
        ) : (
          <>
            <div class="drawer-body">
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
                  <ShoppingBag size={48} style={{ opacity: 0.3, marginBottom: '12px' }} />
                  <p>Votre panier est encore vide.</p>
                  <p style={{ fontSize: '0.88rem', marginTop: '6px' }}>Ajoutez des produits de notre boutique !</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div class="cart-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div class="cart-item-info">
                      <h4>{item.title}</h4>
                      <div class="cart-qty-controls">
                        <button class="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity - 1)}>-</button>
                        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.quantity}</span>
                        <button class="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button onClick={() => onRemoveItem(item.id)} style={{ color: 'var(--text-muted)', padding: '6px' }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}

              {cartItems.length > 0 && (
                <form onSubmit={handleCheckout} style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '14px' }}>Coordonnées de retrait / livraison</h4>
                  
                  <div class="form-group">
                    <label>Nom complet *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Ex: Jean Dupont"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <label>Téléphone Mobile *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="Ex: 06 12 34 56 78"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <label>Instructions spécifiques (facultatif)</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Retrait prévu samedi matin"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                    />
                  </div>

                  <button type="submit" class="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                    <span>Valider ma commande</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>


          </>
        )}
      </div>
    </>
  );
}
