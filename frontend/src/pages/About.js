import { Link } from 'react-router-dom';
import { Target, Eye, Heart, BookOpen, Sparkles, HandHeart, Award, Shield } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'Building character through honesty and ethical conduct in every endeavor.' },
  { icon: Award, title: 'Excellence', desc: 'Striving for the highest standards in academics, sports, and personal growth.' },
  { icon: Heart, title: 'Compassion', desc: 'Fostering empathy and kindness to create a caring community.' },
  { icon: BookOpen, title: 'Discipline', desc: 'Cultivating self-discipline and respect as foundations for success.' },
  { icon: Sparkles, title: 'Creativity', desc: 'Encouraging innovation and creative thinking in all aspects of learning.' },
  { icon: HandHeart, title: 'Service', desc: 'Inspiring students to give back and make positive differences in society.' },
];

const timeline = [
  { year: '1995', event: 'Ananda Academy founded by visionary educators in Haldwani, Uttarakhand' },
  { year: '2000', event: 'Received CBSE affiliation and expanded to senior secondary level' },
  { year: '2005', event: 'New campus inaugurated with modern science labs and library' },
  { year: '2010', event: 'First batch achieves 100% board pass rate' },
  { year: '2015', event: 'Sports complex and auditorium added to campus facilities' },
  { year: '2020', event: 'Digital learning infrastructure deployed across all classrooms' },
  { year: '2023', event: 'Awarded Best School in Uttarakhand by State Education Board' },
];

const alumni = [
  { name: 'Rahul Negi', batch: 'Class of 2018', role: 'Software Engineer, Google', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Priyanka Bisht', batch: 'Class of 2016', role: 'Doctor, AIIMS Delhi', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
  { name: 'Amit Joshi', batch: 'Class of 2020', role: 'IIT Bombay, Researcher', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
];

const awards = [
  'Best School in Uttarakhand 2023', 'CBSE Excellence Award', 'State Science Olympiad Champions',
  'National Sports Achievement', 'Green School Certification', 'Digital Innovation Award',
];

export default function About() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden" data-testid="about-hero">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <p className="section-label !text-white mb-2">ABOUT US</p>
          <h1 className="heading-h1 text-white font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Our Legacy</h1>
          <p className="text-white/80 italic text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Building futures since 1995</p>
        </div>
      </section>

      {/* Founding Story */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="founding-story">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label">OUR STORY</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold mb-6">The Ananda Journey</h2>
              <p className="body-text text-[#666] leading-relaxed mb-4">
                Ananda Academy was established in 1995 with a vision to provide world-class education in the heart of Uttarakhand. What began as a small school with just 50 students has grown into one of the most respected educational institutions in the region.
              </p>
              <p className="body-text text-[#666] leading-relaxed mb-4">
                Our founder believed that true education goes beyond textbooks — it nurtures the mind, body, and spirit. This philosophy continues to guide us as we prepare students for the challenges and opportunities of tomorrow.
              </p>
              <p className="body-text text-[#666] leading-relaxed">
                Today, with over 2,400 students and 120+ dedicated faculty members, Ananda Academy stands as a testament to the power of visionary education. Our CBSE-affiliated curriculum, combined with a focus on holistic development, creates an environment where every child can discover and develop their unique talents.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80" alt="School History" className="rounded-lg w-full h-64 object-cover mb-8 shadow-lg" />
              <div className="space-y-0">
                {timeline.map((t, i) => (
                  <div key={i} className="flex gap-4 items-start" data-testid={`timeline-${i}`}>
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-4 h-4 rounded-full bg-[#C0152A] border-4 border-[#C0152A]/20" />
                      {i < timeline.length - 1 && <div className="w-0.5 h-12 bg-[#C0152A]/20" />}
                    </div>
                    <div className="pb-6">
                      <p className="text-[#C0152A] font-bold text-sm">{t.year}</p>
                      <p className="text-[#333] text-sm">{t.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Vision & Mission */}
      <ScrollReveal>
        <section className="overflow-hidden" data-testid="vision-mission">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#C0152A] p-10 md:p-16 text-white">
              <Eye className="w-12 h-12 mb-4 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be a globally recognized institution that empowers students with knowledge, values, and skills to become responsible leaders and compassionate citizens who contribute positively to society.
              </p>
            </div>
            <div className="bg-[#1A2E6C] p-10 md:p-16 text-white">
              <Target className="w-12 h-12 mb-4 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To provide holistic education that fosters intellectual curiosity, creative expression, physical fitness, and moral integrity, preparing students for the challenges and opportunities of a rapidly changing world.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Principal's Message */}
      <ScrollReveal>
        <section className="py-20" style={{ background: '#F0F9F8' }} data-testid="about-principal">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 items-center">
            <div className="text-center">
              <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden mx-auto shadow-xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" alt="Principal" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1A2E6C] font-bold text-lg mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>Mr. Anand Singh</p>
              <p className="text-[#C0152A] text-sm font-bold tracking-wider uppercase">Principal</p>
            </div>
            <div className="relative">
              <span className="text-8xl text-[#1A2E6C]/10 font-serif absolute -top-6 -left-4 leading-none">"</span>
              <blockquote className="text-[#1A2E6C] text-lg leading-[1.8] pl-8 relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>
                Education is not just about filling minds with knowledge — it's about igniting a flame of curiosity that burns throughout life. At Ananda Academy, we create an environment where every student feels valued, challenged, and inspired to reach their full potential. Our dedicated team of educators works tirelessly to ensure that each child receives the guidance and support they need to succeed.
              </blockquote>
              <div className="mt-6 pl-8 border-t-2 border-dotted border-[#1A2E6C]/20 pt-4">
                <p className="text-[#1A2E6C] font-bold">Mr. Anand Singh</p>
                <p className="text-[#C0152A] text-sm font-bold tracking-wider uppercase">Principal, Ananda Academy</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Core Values */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="core-values">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">WHAT WE STAND FOR</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-lg p-8 hover-lift group" data-testid={`value-${i}`}>
                  <div className="w-14 h-14 rounded-lg bg-[#C0152A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C0152A] transition-colors">
                    <v.icon className="w-7 h-7 text-[#C0152A] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#1A2E6C] font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Alumni Section */}
      <ScrollReveal>
        <section className="py-20 bg-[#F5F5F5]" data-testid="alumni-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">OUR PRIDE</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Distinguished Alumni</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alumni.map((a, i) => (
                <div key={i} className="bg-white rounded-lg p-8 text-center hover-lift" data-testid={`alumni-${i}`}>
                  <img src={a.img} alt={a.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-[#C0152A]/20" loading="lazy" />
                  <h3 className="text-[#1A2E6C] font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{a.name}</h3>
                  <p className="text-[#C0152A] text-sm font-medium">{a.batch}</p>
                  <p className="text-[#666] text-sm mt-2">{a.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Awards Strip */}
      <ScrollReveal>
        <section className="py-12 bg-white border-y" data-testid="awards-strip">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {awards.map((a, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#F5F5F5] px-6 py-3 rounded-full" data-testid={`award-${i}`}>
                  <Award className="w-5 h-5 text-[#C0152A]" />
                  <span className="text-[#1A2E6C] text-sm font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
