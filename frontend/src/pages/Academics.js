import { useState } from 'react';
import { GraduationCap, BookOpen, Award, Download } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const levels = [
  {
    id: 'primary', label: 'Primary School', sub: 'Classes I-V',
    subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'General Knowledge', 'Computer Science', 'Art & Craft', 'Physical Education'],
    methodology: 'Our primary program focuses on building strong foundations through activity-based learning, storytelling, and hands-on experiences. We emphasize reading, numeracy, and social skills through play and structured activities.',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80'
  },
  {
    id: 'middle', label: 'Middle School', sub: 'Classes VI-VIII',
    subjects: ['English', 'Hindi', 'Sanskrit', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Physical Education'],
    methodology: 'The middle school curriculum builds critical thinking and analytical skills. Students explore subjects in depth through projects, experiments, and collaborative learning experiences.',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80'
  },
  {
    id: 'high', label: 'High School', sub: 'Classes IX-X',
    subjects: ['English', 'Hindi', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science', 'Computer Applications', 'Physical Education'],
    methodology: 'High school prepares students for board examinations while developing independent thinking. Rigorous academic preparation is balanced with creative and extracurricular pursuits.',
    img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80'
  },
  {
    id: 'college', label: 'Junior College', sub: 'Classes XI-XII',
    subjects: ['Science Stream: Physics, Chemistry, Mathematics/Biology', 'Commerce Stream: Accountancy, Business Studies, Economics', 'Humanities Stream: History, Political Science, Sociology', 'English Core', 'Physical Education'],
    methodology: 'Our senior secondary program offers specialized streams with expert guidance for competitive exams. Students receive personalized mentoring for career planning and university admissions.',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80'
  },
];

const faculty = [
  { name: 'Dr. Meera Rawat', subject: 'Physics', exp: '15+ years', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
  { name: 'Mr. Rajesh Kumar', subject: 'Mathematics', exp: '12+ years', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Mrs. Sunita Sharma', subject: 'English Literature', exp: '10+ years', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
];

export default function Academics() {
  const [active, setActive] = useState('primary');
  const current = levels.find(l => l.id === active);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden" data-testid="academics-hero">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <p className="section-label !text-white mb-2">ACADEMICS</p>
          <h1 className="heading-h1 text-white font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>The Pursuit of Excellence</h1>
          <p className="text-white/80 italic text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>CBSE curriculum with holistic development</p>
        </div>
      </section>

      {/* Our Approach */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="approach-section">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">OUR APPROACH</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold mb-6">Nurturing Minds, Building Futures</h2>
              <p className="body-text text-[#666] leading-relaxed mb-4">
                At Ananda Academy, our academic approach goes beyond traditional textbook learning. We integrate modern teaching methodologies with time-tested educational principles to create a dynamic learning environment.
              </p>
              <p className="body-text text-[#666] leading-relaxed">
                Our CBSE-affiliated curriculum is enhanced with project-based learning, experiential education, and technology integration, ensuring students develop critical thinking, creativity, and problem-solving skills essential for the 21st century.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80" alt="Academic approach" className="rounded-lg w-full h-80 object-cover shadow-lg" loading="lazy" />
          </div>
        </section>
      </ScrollReveal>

      {/* Level Selector */}
      <ScrollReveal>
        <section className="py-20 bg-[#F5F5F5]" data-testid="level-selector">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="section-label">CURRICULUM</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Explore Our Programs</h2>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex justify-center gap-3 mb-10">
              {levels.map(l => (
                <button
                  key={l.id}
                  onClick={() => setActive(l.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all min-h-[48px] ${
                    active === l.id ? 'bg-[#C0152A] text-white shadow-lg' : 'bg-white border-2 border-[#C0152A] text-[#C0152A] hover:bg-[#C0152A]/5'
                  }`}
                  data-testid={`tab-${l.id}`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Mobile Tabs - 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 mb-8 md:hidden">
              {levels.map(l => (
                <button
                  key={l.id}
                  onClick={() => setActive(l.id)}
                  className={`px-4 py-3 rounded-lg font-medium text-sm transition-all min-h-[52px] ${
                    active === l.id ? 'bg-[#C0152A] text-white shadow-lg' : 'bg-white border-2 border-[#C0152A] text-[#C0152A]'
                  }`}
                  data-testid={`mobile-tab-${l.id}`}
                >
                  {l.label}<br /><span className="text-xs opacity-80">{l.sub}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {current && (
              <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="tab-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-[#1A2E6C] text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{current.label}</h3>
                    <p className="text-[#C0152A] text-sm font-bold mb-4">{current.sub}</p>
                    <p className="text-[#666] leading-relaxed mb-6">{current.methodology}</p>
                    <div className="flex flex-wrap gap-2">
                      {current.subjects.map((s, i) => (
                        <span key={i} className="bg-white border-2 border-[#C0152A]/30 text-[#1A2E6C] px-4 py-1.5 rounded-full text-sm font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <img src={current.img} alt={current.label} className="rounded-lg w-full h-64 object-cover" loading="lazy" />
                </div>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* Faculty Spotlight */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="faculty-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">OUR EDUCATORS</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Faculty Spotlight</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {faculty.map((f, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-lg p-8 text-center hover-lift border-t-4 border-t-[#C0152A]" data-testid={`faculty-${i}`}>
                  <img src={f.img} alt={f.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" loading="lazy" />
                  <h3 className="text-[#1A2E6C] font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{f.name}</h3>
                  <p className="text-[#C0152A] text-sm font-medium">{f.subject}</p>
                  <p className="text-[#666] text-sm mt-1">{f.exp} experience</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Academic Calendar & Achievement Banner */}
      <ScrollReveal>
        <section className="py-12 bg-[#C0152A]" data-testid="achievement-banner">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Board Examination Results 2024</h3>
              <p className="text-white/80 mt-1">99% pass rate | 45 students scored above 95% | 12 state toppers</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-[#C0152A] px-6 py-3 rounded-md font-bold min-h-[48px] flex items-center gap-2 hover:bg-gray-100 transition-colors" data-testid="download-calendar-btn">
                <Download className="w-4 h-4" /> Academic Calendar
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
