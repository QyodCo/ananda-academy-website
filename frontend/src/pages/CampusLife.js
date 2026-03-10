import { useState } from 'react';
import { X, ZoomIn, Calendar, Users } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const galleryImages = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
  'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=800&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
  'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&q=80',
  'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  'https://images.unsplash.com/photo-1549737221-bef65e2604a6?w=800&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
];

const clubs = [
  { title: 'Drama Club', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80', desc: 'Express yourself through theatrical performances, skits, and annual plays that showcase student talent.' },
  { title: 'Music Club', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80', desc: 'Learn instruments, vocal training, and perform at school events and inter-school competitions.' },
  { title: 'Sports Club', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', desc: 'Cricket, football, athletics, and more — developing physical fitness and team spirit.' },
  { title: 'Debate Club', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', desc: 'Sharpen public speaking, critical thinking, and argumentation skills through regular debates.' },
  { title: 'Art Club', img: 'https://images.unsplash.com/photo-1549737221-bef65e2604a6?w=800&q=80', desc: 'Explore painting, sketching, sculpture, and digital art with dedicated art instructors.' },
  { title: 'Science Club', img: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80', desc: 'Hands-on experiments, science fairs, and innovation projects for curious young minds.' },
];

const events = [
  { date: 'Jan 26', title: 'Republic Day Celebration', desc: 'Flag hoisting and patriotic performances' },
  { date: 'Feb 14', title: 'Science Fair Exhibition', desc: 'Student projects and innovation showcase' },
  { date: 'Mar 15', title: 'Annual Day Celebration', desc: 'Cultural performances and prize distribution' },
  { date: 'Apr 22', title: 'Earth Day Activities', desc: 'Environmental awareness programs' },
  { date: 'Aug 15', title: 'Independence Day', desc: 'Special assembly and cultural program' },
  { date: 'Nov 14', title: "Children's Day", desc: 'Fun activities and games for students' },
];

const council = [
  { name: 'Arjun Rawat', role: 'Head Boy', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Sneha Bisht', role: 'Head Girl', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
  { name: 'Rohit Negi', role: 'Sports Captain', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
];

export default function CampusLife() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden" data-testid="campus-hero">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <p className="section-label !text-white mb-2">CAMPUS LIFE</p>
          <h1 className="heading-h1 text-white font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Life at Ananda</h1>
          <p className="text-white/80 italic text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Where memories are made</p>
        </div>
      </section>

      {/* Photo Gallery */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="gallery-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">GALLERY</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Campus Moments</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  style={{ height: i % 3 === 0 ? '280px' : '220px' }}
                  onClick={() => setLightbox(img)}
                  data-testid={`gallery-img-${i}`}
                >
                  <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-[#C0152A]/0 group-hover:bg-[#C0152A]/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)} data-testid="lightbox">
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white z-10" data-testid="close-lightbox">
            <X className="w-8 h-8" />
          </button>
          <img src={lightbox} alt="Gallery" className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg" />
        </div>
      )}

      {/* Clubs & Activities */}
      <ScrollReveal>
        <section className="py-20 bg-[#F5F5F5]" data-testid="clubs-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">EXTRACURRICULAR</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Clubs & Activities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((c, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden hover-lift" data-testid={`club-${i}`}>
                  <img src={c.img} alt={c.title} className="w-full h-[200px] object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-[#C0152A] font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{c.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Events Calendar */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="events-section">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">EVENTS</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Upcoming Events</h2>
            </div>
            <div className="space-y-4">
              {events.map((e, i) => (
                <div key={i} className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow" data-testid={`event-${i}`}>
                  <div className="bg-[#C0152A] text-white rounded-lg p-3 text-center min-w-[70px] shrink-0">
                    <p className="text-xs font-bold uppercase">{e.date.split(' ')[0]}</p>
                    <p className="text-xl font-bold">{e.date.split(' ')[1]}</p>
                  </div>
                  <div>
                    <h3 className="text-[#1A2E6C] font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{e.title}</h3>
                    <p className="text-[#666] text-sm">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Student Council */}
      <ScrollReveal>
        <section className="py-20 bg-[#F5F5F5]" data-testid="student-council">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">STUDENT LEADERSHIP</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Student Council</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {council.map((c, i) => (
                <div key={i} className="bg-white rounded-lg p-8 text-center hover-lift" data-testid={`council-${i}`}>
                  <img src={c.img} alt={c.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-[#C0152A]/20" loading="lazy" />
                  <h3 className="text-[#1A2E6C] font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{c.name}</h3>
                  <p className="text-[#C0152A] text-sm font-bold uppercase tracking-wider">{c.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
