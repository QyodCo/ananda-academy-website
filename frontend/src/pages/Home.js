import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Users, BookOpen, Award, Shield, Building2, FlaskConical, Dumbbell, Monitor, Music, Library } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

function CtaContent() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0, rootMargin: '0px 0px 100px 0px' });
 obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-[70px] md:py-[100px]">
      <div className="max-w-[700px]">
        <p className={`text-[#C0152A] font-bold text-sm tracking-[0.2em] uppercase mb-5 ${visible ? 'cta-stagger-1' : 'opacity-0'}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
          ADMISSIONS OPEN 2025–26
        </p>
        <h2 className={`text-white font-bold mb-5 ${visible ? 'cta-stagger-2' : 'opacity-0'}`} style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)' }}>
          Ready to Join the Ananda Family?
        </h2>
        <p className={`text-white/80 leading-relaxed mb-10 ${visible ? 'cta-stagger-3' : 'opacity-0'}`} style={{ fontSize: 'clamp(15px, 2vw, 18px)' }}>
          Begin your child's journey with Ananda Academy. Join a community dedicated to excellence, creativity, and character building.
        </p>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${visible ? 'cta-stagger-4' : 'opacity-0'}`}>
          <Link to="/admissions" className="bg-white text-[#1A2E6C] font-bold text-center rounded-[6px] min-w-[200px] w-full sm:w-auto hover:bg-gray-100 transition-all h-[48px] sm:h-[52px] flex items-center justify-center px-8" data-testid="cta-apply-btn">
            Apply for 2025–26
          </Link>
          <button className="border-2 border-white text-white font-bold text-center rounded-[6px] min-w-[200px] w-full sm:w-auto hover:bg-white/10 transition-all h-[48px] sm:h-[52px] flex items-center justify-center px-8" data-testid="cta-brochure-btn">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}

const heroImages = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80',
];

const aboutImgs = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
  'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
];

const whyCards = [
  { title: 'Expert Faculty', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80', desc: 'Our 120+ qualified educators bring passion and expertise to every classroom, ensuring personalized attention for each student.' },
  { title: 'Modern Curriculum', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', desc: 'CBSE-aligned curriculum integrating technology, critical thinking, and real-world applications for 21st-century learners.' },
  { title: 'Academic Excellence', img: 'https://images.unsplash.com/photo-1549737221-bef65e2604a6?w=800&q=80', desc: 'Consistently achieving 99% board results with numerous students securing top ranks in national examinations.' },
  { title: 'Safe Campus', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', desc: 'A secure, nurturing environment with CCTV surveillance, trained staff, and comprehensive safety protocols.' },
];

const infraCards = [
  { title: 'Modern Classrooms', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', desc: 'Smart boards and ergonomic furniture in every classroom.' },
  { title: 'Science Laboratories', img: 'https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?w=800&q=80', desc: 'Fully equipped physics, chemistry, and biology labs.' },
  { title: 'Sports Complex', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', desc: 'Multi-sport facilities including cricket, football, and athletics.' },
  { title: 'Library & Resource Center', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', desc: 'Over 15,000 books and digital resources for research.' },
  { title: 'Computer Lab', img: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80', desc: 'Modern computer lab with high-speed internet access.' },
  { title: 'Performing Arts Stage', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80', desc: 'Dedicated auditorium for cultural events and performances.' },
];

const achieveCards = [
  { title: '99% Board Results', img: 'https://images.unsplash.com/photo-1758270704417-26c1244cfaf3?w=600&q=80', desc: 'Our students consistently achieve outstanding results in CBSE board examinations.' },
  { title: 'State Science Champions', img: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80', desc: 'Multiple wins at Uttarakhand State Science Olympiad and national competitions.' },
  { title: '30+ Years of Excellence', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', desc: 'Three decades of educational leadership and community trust since 1995.' },
  { title: 'Best School Award 2023', img: 'https://images.unsplash.com/photo-1549737221-bef65e2604a6?w=800&q=80', desc: 'Recognized as the Best School in Uttarakhand by the State Education Board.' },
  { title: '1000+ Alumni Worldwide', img: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80', desc: 'Our graduates excel in top universities and careers across the globe.' },
  { title: 'CBSE Affiliated', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', desc: 'Proud affiliation with CBSE ensuring national-standard education delivery.' },
];

const testimonials = [
  { name: 'Mrs. Priya Sharma', relation: 'Parent', text: 'We are incredibly proud to see our daughter thrive at Ananda Academy. The teachers are dedicated, the campus is beautiful, and the values instilled here are remarkable.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
  { name: 'Rahul Negi', relation: 'Alumni, Class of 2018', text: 'Ananda Academy shaped who I am today. The values and education I received here prepared me for IIT and beyond. Forever grateful to this institution.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { name: 'Mr. Vikram Rawat', relation: 'Parent', text: 'The holistic approach to education at Ananda Academy ensures every child finds their passion. My son has flourished in both academics and sports here.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
];

const stats = [
  { value: '1995', label: 'Founded' },
  { value: '2400+', label: 'Students' },
  { value: '120+', label: 'Faculty' },
  { value: '99%', label: 'Pass Rate' },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [aboutSlide, setAboutSlide] = useState(0);
  const touchRef = useRef(0);
  const aboutTouchRef = useRef(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % heroImages.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setAboutSlide(p => (p + 1) % aboutImgs.length), 3000);
    return () => clearInterval(t);
  }, []);

  const heroTouch = (e) => { touchRef.current = e.touches[0].clientX; };
  const heroTouchEnd = (e) => {
    const d = touchRef.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) setSlide(p => d > 0 ? (p + 1) % heroImages.length : (p - 1 + heroImages.length) % heroImages.length);
  };
  const aboutTouch = (e) => { aboutTouchRef.current = e.touches[0].clientX; };
  const aboutTouchEnd = (e) => {
    const d = aboutTouchRef.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) setAboutSlide(p => d > 0 ? (p + 1) % aboutImgs.length : (p - 1 + aboutImgs.length) % aboutImgs.length);
  };

  return (
    <div className="page-enter">
      {/* Announcement Ticker */}
      <div className="bg-[#C0152A] overflow-hidden" data-testid="announcement-ticker">
        <div className="ticker-track py-2.5">
          {[0, 1].map(i => (
            <div key={i} className="flex items-center gap-6 px-8 text-white text-sm whitespace-nowrap shrink-0">
              <span>Admissions Open for 2025-26 — <Link to="/admissions" className="underline font-bold hover:text-white/80">Apply Now!</Link></span>
              <span className="text-white/40">|</span>
              <span>Annual Day Celebration — March 15, 2025</span>
              <span className="text-white/40">|</span>
              <span>99% Board Results — Congratulations Students!</span>
              <span className="text-white/40">|</span>
              <span>Online Fee Payment Now Available</span>
              <span className="text-white/40">|</span>
              <span>Contact us: +91-XXXXXXXXXX</span>
              <span className="text-white/40 px-4">|</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Slideshow */}
      <section className="relative h-screen min-h-[600px] overflow-hidden" data-testid="hero-section" onTouchStart={heroTouch} onTouchEnd={heroTouchEnd}>
        {heroImages.map((img, i) => (
          <div key={i} className={`hero-slide ${i === slide ? 'active' : ''}`} style={{ backgroundImage: `url(${img})` }} />
        ))}
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-[#C0152A] font-bold text-sm tracking-[0.2em] uppercase mb-4 bg-white/90 px-4 py-1 rounded-full">WELCOME TO</p>
          <h1 className="heading-h1 font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', animation: 'colorCycle 5s ease-in-out infinite', color: 'white' }}>Ananda Academy</h1>
          <p className="text-white/90 text-xl italic mb-4" style={{ fontFamily: 'Playfair Display, serif', animation: 'taglineGlow 3s ease-in-out infinite' }}>The Joy of Learning</p>
          <p className="text-white/80 max-w-[600px] mb-8 body-text leading-relaxed">
            A premier educational institution in Uttarakhand, nurturing young minds since 1995 through academic excellence and holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/admissions" className="bg-[#C0152A] text-white px-8 py-4 rounded-md text-sm font-bold hover:bg-[#a01223] transition-all min-h-[52px] text-center" style={{ animation: 'subtlePulse 2s ease-in-out infinite, colorBlink 1.5s ease-in-out infinite' }} data-testid="hero-apply-btn">Apply Now</Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-md text-sm font-bold hover:bg-white hover:text-[#1A2E6C] transition-all min-h-[52px] text-center" data-testid="hero-explore-btn">Explore School</Link>
          </div>
        </div>
        {/* Auto-advance only - no manual arrows */}
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`slide-dot ${i === slide ? 'active' : ''}`} data-testid={`hero-dot-${i}`} />
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <ScrollReveal>
        <section className="bg-white py-12 border-b" data-testid="stats-section">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="border-l-4 border-[#C0152A] pl-6 py-2" data-testid={`stat-${i}`}>
                <p className="text-3xl md:text-4xl font-bold text-[#1A2E6C]" style={{ fontFamily: 'Playfair Display, serif' }}>{s.value}</p>
                <p className="text-[#C0152A] text-sm font-bold tracking-wider uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* About Preview */}
      <ScrollReveal>
        <section className="relative py-20 bg-white overflow-hidden" data-testid="about-preview">
          <div className="absolute top-0 right-0 w-64 h-64 pattern-dots" />
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Mobile: carousel first */}
            <div className="md:hidden">
              <div className="relative border-[3px] border-[#C0152A] rounded-lg overflow-hidden" onTouchStart={aboutTouch} onTouchEnd={aboutTouchEnd}>
                <div className="relative h-64">
                  {aboutImgs.map((img, i) => (
                    <div key={i} className={`hero-slide ${i === aboutSlide ? 'active' : ''}`} style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  ))}
                </div>
                <button onClick={() => setAboutSlide(p => (p - 1 + aboutImgs.length) % aboutImgs.length)} className="carousel-arrow absolute left-2 top-1/2 -translate-y-1/2 !w-10 !h-10"><ChevronLeft className="w-5 h-5 text-[#C0152A]" /></button>
                <button onClick={() => setAboutSlide(p => (p + 1) % aboutImgs.length)} className="carousel-arrow absolute right-2 top-1/2 -translate-y-1/2 !w-10 !h-10"><ChevronRight className="w-5 h-5 text-[#C0152A]" /></button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {aboutImgs.map((_, i) => (<button key={i} onClick={() => setAboutSlide(i)} className={`slide-dot !w-2.5 !h-2.5 ${i === aboutSlide ? 'active' : ''}`} />))}
                </div>
              </div>
            </div>
            <div>
              <p className="section-label">ABOUT US</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold mb-6">A Legacy of Excellence Since 1995</h2>
              <p className="body-text text-[#666] leading-relaxed mb-4">
                Founded in the serene foothills of Uttarakhand, Ananda Academy has been a beacon of educational excellence for over three decades. Our philosophy combines rigorous academics with character building, creating well-rounded individuals.
              </p>
              <p className="body-text text-[#666] leading-relaxed mb-6">
                We believe in nurturing each child's unique potential through innovative teaching methods, state-of-the-art facilities, and a warm, inclusive community environment.
              </p>
              <Link to="/about" className="text-[#C0152A] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all" data-testid="about-learn-more">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Desktop: carousel */}
            <div className="hidden md:block">
              <div className="relative border-[3px] border-[#C0152A] rounded-lg overflow-hidden" onTouchStart={aboutTouch} onTouchEnd={aboutTouchEnd}>
                <div className="relative h-80">
                  {aboutImgs.map((img, i) => (
                    <div key={i} className={`hero-slide ${i === aboutSlide ? 'active' : ''}`} style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  ))}
                </div>
                <button onClick={() => setAboutSlide(p => (p - 1 + aboutImgs.length) % aboutImgs.length)} className="carousel-arrow absolute left-3 top-1/2 -translate-y-1/2"><ChevronLeft className="w-5 h-5 text-[#C0152A]" /></button>
                <button onClick={() => setAboutSlide(p => (p + 1) % aboutImgs.length)} className="carousel-arrow absolute right-3 top-1/2 -translate-y-1/2"><ChevronRight className="w-5 h-5 text-[#C0152A]" /></button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {aboutImgs.map((_, i) => (<button key={i} onClick={() => setAboutSlide(i)} className={`slide-dot !w-3 !h-3 ${i === aboutSlide ? 'active' : ''}`} />))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Principal's Message */}
      <ScrollReveal>
        <section className="py-20" style={{ background: '#F0F9F8' }} data-testid="principal-message">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-center">
            <div className="text-center">
              <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden mx-auto shadow-xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" alt="Principal" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1A2E6C] font-bold text-lg mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>Mr. Anand Singh</p>
              <p className="text-[#C0152A] text-sm font-bold tracking-wider uppercase">Principal, Ananda Academy</p>
            </div>
            <div className="relative">
              <span className="text-8xl text-[#1A2E6C]/10 font-serif absolute -top-6 -left-4 leading-none">"</span>
              <blockquote className="text-[#1A2E6C] text-lg md:text-xl leading-[1.8] pl-8 md:pl-12 relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>
                At Ananda Academy, we believe every child is born with unique gifts. Our mission is to nurture those gifts through compassionate teaching, rigorous academics, and an environment where curiosity thrives. Together with our dedicated faculty and supportive parents, we create a community where every student can reach their full potential.
              </blockquote>
              <div className="mt-6 pl-8 md:pl-12 border-t-2 border-dotted border-[#1A2E6C]/20 pt-4">
                <p className="text-[#1A2E6C] font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Mr. Anand Singh</p>
                <p className="text-[#C0152A] text-sm font-bold tracking-wider uppercase">Principal</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal>
        <section className="py-20 bg-[#F5F5F5] relative overflow-hidden" data-testid="why-choose-section">
          <div className="absolute inset-0 pattern-grid" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <p className="section-label">OUR STRENGTHS</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Why Choose Ananda Academy?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCards.map((c, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden hover-lift border-t-4 border-[#C0152A] group" data-testid={`why-card-${i}`}>
                  <img src={c.img} alt={c.title} className="w-full h-[180px] object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-[#1A2E6C] font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{c.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Infrastructure */}
      <ScrollReveal>
        <section className="py-20 bg-white relative overflow-hidden" id="infrastructure-section" data-testid="infrastructure-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">WORLD-CLASS FACILITIES</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Our Infrastructure</h2>
              <p className="text-[#666] mt-3 body-text max-w-2xl mx-auto">State-of-the-art facilities designed to inspire learning and holistic development.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infraCards.map((c, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden hover-lift shadow-sm border border-gray-100 group" data-testid={`infra-card-${i}`}>
                  <img src={c.img} alt={c.title} className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-[#1A2E6C] font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{c.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed mb-3">{c.desc}</p>
                    <span className="text-[#C0152A] text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                      
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Achievements */}
      <ScrollReveal>
        <section className="py-20 bg-[#F5F5F5] relative overflow-hidden" id="achievements-section" data-testid="achievements-section">
          <div className="absolute inset-0 pattern-dots" style={{ opacity: 0.03 }} />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <p className="section-label">MILESTONES</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Our Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achieveCards.map((c, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden hover-lift border-t-4 border-[#C0152A]" data-testid={`achieve-card-${i}`}>
                  <img src={c.img} alt={c.title} className="w-full h-[180px] object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-[#1A2E6C] font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{c.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/about" className="inline-flex items-center gap-2 border-2 border-[#C0152A] text-[#C0152A] px-8 py-3 rounded-md font-bold hover:bg-[#C0152A] hover:text-white transition-all min-h-[48px]" data-testid="view-achievements-btn">
                View All Achievements <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="testimonials-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">WHAT PARENTS SAY</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Voices of Our Community</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[#F5F5F5] rounded-lg p-8 relative hover-lift" data-testid={`testimonial-${i}`}>
                  <span className="text-6xl text-[#C0152A]/20 font-serif absolute top-4 left-6 leading-none">"</span>
                  <p className="text-[#333] leading-relaxed mt-8 mb-6 relative z-10">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="text-[#1A2E6C] font-bold text-sm">{t.name}</p>
                      <p className="text-[#C0152A] text-xs">{t.relation}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3">
                    {[1,2,3,4,5].map(s => (<Star key={s} className="w-4 h-4 fill-[#C0152A] text-[#C0152A]" />))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Admissions CTA — Parallax */}
      <section
        className="relative overflow-hidden cta-parallax"
        id="admissions-cta"
        data-testid="admissions-cta"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.72), rgba(10,20,60,0.72)), url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CtaContent />
      </section>

      {/* Spacer between CTA and Footer */}
      <div className="h-10 bg-[#F5F5F5]" />
    </div>
  );
}
