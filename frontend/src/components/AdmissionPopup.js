import { useState, useEffect, useCallback } from 'react';

const POPUP_IMG = "https://customer-assets.emergentagent.com/job_75afa09c-d96e-4a7b-bcdc-18eb719c8f40/artifacts/17xjjp4z_ANANDA%20ACADEMY.png";

export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (sessionStorage.getItem('admission_popup_shown')) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem('admission_popup_shown', '1');
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      onClick={close}
      data-testid="admission-popup-overlay"
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', maxWidth: '560px', width: '92vw' }}
        data-testid="admission-popup"
      >
        <button
          onClick={close}
          data-testid="admission-popup-close"
          style={{
            position: 'absolute', top: '-16px', right: '-16px', width: '36px', height: '36px',
            borderRadius: '50%', background: 'white', color: '#1A2E6C', fontSize: '20px', fontWeight: 'bold',
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)', transition: '0.2s ease', zIndex: 1,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#C0152A'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#1A2E6C'; }}
        >
          &#10005;
        </button>
        <img src={POPUP_IMG} alt="Ananda Academy Admissions" style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} data-testid="admission-popup-image" />
      </div>
    </div>
  );
}
