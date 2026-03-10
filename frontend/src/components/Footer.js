import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const LOGO = "https://customer-assets.emergentagent.com/job_13076bab-5622-4e99-ae60-ea7649763768/artifacts/hg8kvk8j_images%20%281%29.jpg";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await axios.post(`${API}/newsletter`, { email });
      toast.success(res.data.message);
      setEmail('');
    } catch {
      toast.error('Subscription failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <footer className="bg-[#152354] text-white border-t-4 border-[#C0152A]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO} alt="Logo" className="h-12 w-12 object-contain" />
              <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Ananda Academy</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              "The Joy of Learning"
            </p>
            <p className="text-sm text-white/60 mt-3 leading-relaxed">
              A premier CBSE-affiliated institution in Uttarakhand, nurturing young minds since 1995.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              {[['/', 'Home'], ['/about', 'About Us'], ['/academics', 'Academics'], ['/admissions', 'Admissions'], ['/campus-life', 'Campus Life'], ['/contact', 'Contact']].map(([p, l]) => (
                <li key={p}>
                  <Link to={p} className="text-sm text-white/70 hover:text-[#C0152A] transition-colors" data-testid={`footer-${l.toLowerCase().replace(/\s/g, '-')}`}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C0152A] shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">The Ananda Academy, Vill. Dahariya, P.O, ITI Dhanmill Rd, Manpur West, Haldwani, Uttarakhand 263139</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C0152A] shrink-0" />
                <span className="text-sm text-white/70">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C0152A] shrink-0" />
                <span className="text-sm text-white/70">info@anandaacademy.edu.in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Stay Connected</h4>
            <div className="flex gap-3 mb-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="https://www.instagram.com/qyodco_" className="w-10 h-10 rounded-full bg-[#C0152A] flex items-center justify-center hover:bg-[#a01223] transition-colors" data-testid={`social-${i}`}>
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2" data-testid="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-md text-sm text-[#333] bg-white focus:outline-none min-h-[44px]"
                data-testid="newsletter-email"
              />
              <button type="submit" disabled={loading} className="bg-[#C0152A] px-4 rounded-md hover:bg-[#a01223] transition-colors min-h-[44px]" data-testid="newsletter-submit">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-3">
        <p className="text-white font-bold text-sm mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#C0152A]" /> Find Us On Map
        </p>
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Ananda+Academy+Haldwani+Uttarakhand+263139&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="220"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen=""
            loading="lazy"
            title="Ananda Academy Location"
            className="h-[200px] md:h-[220px]"
          />
        </div>
      </div>
      <div className="border-t border-[#C0152A] mt-6">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center" style={{ fontSize: '13px' }}>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-0">
            <span className="text-white/60">&copy; {new Date().getFullYear()} Ananda Academy. All rights reserved.</span>
            <span className="hidden md:inline text-white/60">&nbsp;|&nbsp;</span>
            <span className="mt-2 md:mt-0 inline-flex items-center" style={{ lineHeight: '36px' }}>
              <span className="text-white/75" style={{ fontSize: '13px' }}>Designed by&nbsp;</span>
              <a href="https://www.instagram.com/qyodco_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0 text-white/75 hover:text-[#FF4500] hover:opacity-100" style={{ transition: '0.3s ease', textDecoration: 'none' }} data-testid="bomb-code-credit">
                <img src="/qyod-co logo.png" alt="Qyod Co." style={{ height: '36px', width: 'auto', verticalAlign: 'middle', display: 'inline-block', margin: '0' }} />
                <span className="font-bold text-white" style={{ fontSize: '13px' }}>Qyod Co.</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
