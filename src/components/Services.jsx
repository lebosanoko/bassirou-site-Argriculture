import React from 'react';
import { Wheat, Tractor, Heart, ShoppingBag } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Wheat size={32} />,
      title: "Polyculture & Céréales",
      description: "Production durable de blé tendre, maïs bio et fourrage de qualité supérieure récoltés selon le rythme naturel des saisons."
    },
    {
      icon: <Heart size={32} />,
      title: "Élevage Plein Air Responsable",
      description: "Élevage attentionné de bovins, chèvres, porcs et équidés élevés en grands espaces avec de l'herbe fraîche et des graines de la ferme."
    },
    {
      icon: <Tractor size={32} />,
      title: "Travail de la Terre & Agroécologie",
      description: "Aménagement des sols, préservation des haies champêtres et techniques modernes garantissant la pérennité du sol."
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Boutique & Vente Directe",
      description: "Distribution en circuit court de nos colis de viande, fromages fermiers, miel et paniers de légumes bio frais."
    }
  ];

  return (
    <section class="py-section bg-alt" id="services">
      <div class="container">
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span class="section-tag">Nos Domaines d'Excellence</span>
          <h2 class="section-title">Les 4 piliers de notre exploitation</h2>
          <p class="section-subtitle">
            Une polyvalence maîtrisée qui unit le travail de la terre, l'attention au vivant et l'accueil du public.
          </p>
        </div>

        <div class="services-grid">
          {servicesList.map((srv, index) => (
            <article class="service-card" key={index}>
              <div class="service-icon-box">
                {srv.icon}
              </div>
              <h3>{srv.title}</h3>
              <p>{srv.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
