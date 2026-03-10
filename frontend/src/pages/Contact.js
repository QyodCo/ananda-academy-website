import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import axios from 'axios';
import { toast } from 'sonner';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/contact`, form);
      toast.success(res.data.message);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      toast.error('Submission failed. Please try again.');
    }
    setLoading(false);
  };

  const update = (field, value) => setForm(p => ({ ...p, [field]: value }));

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden" data-testid="contact-hero">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <p className="section-label !text-white mb-2">CONTACT US</p>
          <h1 className="heading-h1 text-white font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Find Us</h1>
          <p className="text-white/80 italic text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="contact-form-section">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <p className="section-label">GET IN TOUCH</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div>
                  <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Full Name *</label>
                  <input type="text" value={form.name} onChange={e => update('name', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333]" required data-testid="contact-name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Email Address *</label>
                    <input type="email" value={form.email} onChange={e => update('email', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333]" required data-testid="contact-email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333]" data-testid="contact-phone" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Subject</label>
                  <input type="text" value={form.subject} onChange={e => update('subject', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333]" data-testid="contact-subject" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Message *</label>
                  <textarea value={form.message} onChange={e => update('message', e.target.value)} rows={5} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none text-[#333] resize-none" required data-testid="contact-message" />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-[#C0152A] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#a01223] transition-colors min-h-[52px] disabled:opacity-50" data-testid="contact-submit-btn">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Info + Map */}
            <div>
              <p className="section-label">INFORMATION</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold mb-8">Contact Details</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C0152A]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#C0152A]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A2E6C] font-bold mb-1">Address</h3>
                    <p className="text-[#666] text-sm leading-relaxed">The Ananda Academy, Vill. Dahariya, P.O, ITI Dhanmill Rd, Manpur West, Haldwani, Uttarakhand 263139</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C0152A]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#C0152A]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A2E6C] font-bold mb-1">Phone</h3>
                    <p className="text-[#666] text-sm">+91-XXXXXXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C0152A]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#C0152A]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A2E6C] font-bold mb-1">Email</h3>
                    <p className="text-[#666] text-sm">info@anandaacademy.edu.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C0152A]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#C0152A]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A2E6C] font-bold mb-1">Office Hours</h3>
                    <p className="text-[#666] text-sm">Monday - Saturday: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mb-8">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-11 h-11 rounded-full bg-[#C0152A] flex items-center justify-center hover:bg-[#a01223] transition-colors" data-testid={`contact-social-${i}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border-2 border-gray-200" data-testid="map-embed">
                <iframe
                  src="https://maps.google.com/maps?q=29.2167,79.5167&z=14&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ananda Academy Location"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Admissions Enquiry */}
      <ScrollReveal>
        <section className="py-12 bg-[#F5F5F5]" data-testid="admissions-enquiry">
          <div className="max-w-3xl mx-auto px-4">
            <div className="border-2 border-[#C0152A] rounded-xl p-8 bg-white text-center">
              <h3 className="text-[#1A2E6C] text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Admissions Enquiry</h3>
              <p className="text-[#666] mb-6">Interested in enrolling your child at Ananda Academy? Our admissions team is here to help you through every step of the process.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" className="bg-[#C0152A] text-white px-8 py-3 rounded-md font-bold hover:bg-[#a01223] transition-all min-h-[48px] inline-flex items-center justify-center" data-testid="enquiry-apply-btn">
                  Apply Now
                </a>
                <a href="tel:+91XXXXXXXXXX" className="border-2 border-[#1A2E6C] text-[#1A2E6C] px-8 py-3 rounded-md font-bold hover:bg-[#1A2E6C] hover:text-white transition-all min-h-[48px] inline-flex items-center justify-center" data-testid="enquiry-call-btn">
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
