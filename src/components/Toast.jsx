import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div class="toast-container">
      {toasts.map(toast => (
        <div class="toast" key={toast.id}>
          <CheckCircle2 size={18} color="var(--brand-gold-500)" />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
