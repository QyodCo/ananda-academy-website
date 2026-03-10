import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const LOGO = "https://customer-assets.emergentagent.com/job_13076bab-5622-4e99-ae60-ea7649763768/artifacts/hg8kvk8j_images%20%281%29.jpg";

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/academics', label: 'Academics' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/campus-life', label: 'Campus Life' },
  { path: '/contact', label: 'Contact' },
];

const searchItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Campus Life', path: '/campus-life' },
  { label: 'Contact', path: '/contact' },
  { label: 'Apply Now', path: '/admissions' },
  { label: 'Fee Structure', path: '/admissions' },
  { label: 'Faculty', path: '/academics' },
  { label: 'Infrastructure', path: '/', hash: 'infrastructure-section' },
  { label: 'Achievements', path: '/', hash: 'achievements-section' },
  { label: 'Principal', path: '/about' },
  { label: 'Gallery', path: '/campus-life' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState('');
  const loc = useLocation();
  const navigate = useNavigate();

  const filtered = query.length > 0
    ? searchItems.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); setSearchOpen(false); setQuery(''); }, [loc]);

  useEffect(() => {
    if (!searchOpen) return;
    const handler = (e) => {
      const bar = document.querySelector('[data-testid="search-bar"]');
      const btn = document.querySelector('[data-testid="search-toggle"]');
      if (bar && !bar.contains(e.target) && btn && !btn.contains(e.target)) {
        setSearchOpen(false); setQuery('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') { setSearchOpen(false); setQuery(''); } };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const handleSearchSelect = (item) => {
    setSearchOpen(false);
    setQuery('');
    navigate(item.path);
    if (item.hash) {
      setTimeout(() => {
        const el = document.getElementById(item.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 600);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b-[3px] border-[#C0152A] transition-shadow ${scrolled ? 'shadow-lg' : ''}`} data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 shrink-0" data-testid="navbar-logo">
            <img src={LOGO} alt="Ananda Academy" className="h-12 w-12 object-contain" />
            <span className="text-[#1A2E6C] font-bold text-xl sm:text-xl whitespace-nowrap" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(15px, 3vw, 1.25rem)' }} data-testid="navbar-school-name">
              Ananda Academy
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium transition-colors hover:text-[#C0152A] ${
                  loc.pathname === l.path ? 'nav-link-active text-[#C0152A]' : 'text-[#1A2E6C]'
                }`}
                data-testid={`nav-${l.label.toLowerCase().replace(' ', '-')}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => { setSearchOpen(!searchOpen); setQuery(''); }} className="p-2 text-[#1A2E6C] hover:text-[#C0152A] transition-colors" data-testid="search-toggle">
              {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>
            <Link to="/admissions" className="hidden sm:inline-flex items-center justify-center bg-[#C0152A] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#a01223] transition-all min-h-[48px]" data-testid="apply-now-btn">
              APPLY NOW
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#1A2E6C]" data-testid="hamburger-menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4 relative" data-testid="search-bar" style={{ animation: 'pageFadeIn 0.25s ease-out' }}>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search Ananda Academy..."
              className="w-full px-4 py-3 border-2 border-[#1A2E6C] rounded-lg focus:border-[#C0152A] focus:outline-none text-[#333] min-h-[48px]"
              autoFocus
              data-testid="search-input"
            />
            {filtered.length > 0 && (
              <div className="absolute top-full left-0 right-0 -mt-3 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-60 overflow-y-auto" data-testid="search-results">
                {filtered.map((item, i) => (
                  <button key={i} onClick={() => handleSearchSelect(item)} className="w-full text-left px-4 py-3 text-sm text-[#1A2E6C] hover:bg-[#C0152A] hover:text-white transition-colors border-b border-gray-50 last:border-0" data-testid={`search-result-${i}`}>
                    {item.label}
                  </button>
                ))}
              </div>
            )}
            {query.length > 0 && filtered.length === 0 && (
              <div className="absolute top-full left-0 right-0 -mt-3 bg-white rounded-lg shadow-lg border px-4 py-3 text-sm text-[#666] z-50">No results found</div>
            )}
          </div>
        )}
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[75px] bg-[#1A2E6C] z-50 overflow-y-auto" data-testid="mobile-menu">
          <div className="flex flex-col p-4">
            {links.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-white text-lg font-medium py-4 px-4 border-b border-white/20 min-h-[56px] flex items-center ${
                  loc.pathname === l.path ? 'bg-white/10' : ''
                }`}
                data-testid={`mobile-nav-${l.label.toLowerCase().replace(' ', '-')}`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/admissions" className="mt-4 bg-[#C0152A] text-white text-lg font-bold py-4 px-4 rounded-lg text-center min-h-[56px] flex items-center justify-center" data-testid="mobile-apply-btn">
              APPLY NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
