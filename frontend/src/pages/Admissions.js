import { useState } from 'react';
import { FileText, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import axios from 'axios';
import { toast } from 'sonner';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const steps = [
  { num: 1, title: 'Fill Application', desc: 'Complete the online application form with student and parent details.' },
  { num: 2, title: 'Document Submission', desc: 'Submit required documents including birth certificate and previous marksheets.' },
  { num: 3, title: 'Entrance Assessment', desc: 'Student appears for an age-appropriate entrance assessment.' },
  { num: 4, title: 'Enrollment Confirmation', desc: 'Receive admission confirmation and complete fee payment.' },
];

const fees = [
  { grade: 'Primary (I-V)', tuition: '45,000', dev: '5,000', transport: '15,000', total: '65,000' },
  { grade: 'Middle (VI-VIII)', tuition: '55,000', dev: '5,000', transport: '15,000', total: '75,000' },
  { grade: 'High (IX-X)', tuition: '65,000', dev: '7,500', transport: '15,000', total: '87,500' },
  { grade: 'Senior (XI-XII)', tuition: '75,000', dev: '10,000', transport: '15,000', total: '1,00,000' },
];

const eligibility = [
  { grade: 'Class I', age: '5-6 years', req: 'Kindergarten completion' },
  { grade: 'Class VI', age: '10-11 years', req: 'Class V pass certificate' },
  { grade: 'Class IX', age: '13-14 years', req: 'Class VIII pass certificate' },
  { grade: 'Class XI', age: '15-16 years', req: 'Class X board results' },
];

const docs = [
  'Birth Certificate (original + copy)',
  'Previous School Transfer Certificate',
  'Report Card / Mark Sheet (last 2 years)',
  'Passport-size Photographs (4 copies)',
  'Aadhar Card (student + parent)',
  'Address Proof',
  'Medical Fitness Certificate',
  'Caste Certificate (if applicable)',
];

const dates = [
  { date: 'Jan 15, 2025', event: 'Admissions Portal Opens' },
  { date: 'Feb 28, 2025', event: 'Early Bird Application Deadline' },
  { date: 'Mar 15-20, 2025', event: 'Entrance Assessments' },
  { date: 'Apr 1, 2025', event: 'Results Announced' },
  { date: 'Apr 15, 2025', event: 'Fee Payment Deadline' },
  { date: 'Jun 1, 2025', event: 'New Session Begins' },
];

export default function Admissions() {
  const [form, setForm] = useState({
    student_name: '', date_of_birth: '', grade_applying: '',
    parent_name: '', phone: '', email: '', address: '', message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.student_name || !form.email || !form.phone || !form.parent_name || !form.grade_applying) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/admissions/apply`, form);
      toast.success(res.data.message);
      setForm({ student_name: '', date_of_birth: '', grade_applying: '', parent_name: '', phone: '', email: '', address: '', message: '' });
    } catch {
      toast.error('Submission failed. Please try again.');
    }
    setLoading(false);
  };

  const update = (field, value) => setForm(p => ({ ...p, [field]: value }));

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden" data-testid="admissions-hero">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <p className="section-label !text-white mb-2">ADMISSIONS</p>
          <h1 className="heading-h1 text-white font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Begin Your Journey</h1>
          <p className="text-white/80 italic text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Admissions open for 2025-26</p>
        </div>
      </section>

      {/* 4-Step Process */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="admission-steps">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">ADMISSION PROCESS</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">How to Apply</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-1 bg-[#C0152A]/20" />
              {steps.map((s, i) => (
                <div key={i} className="text-center relative z-10" data-testid={`step-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-[#C0152A] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg">
                    {s.num}
                  </div>
                  <h3 className="text-[#1A2E6C] font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{s.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Fee Structure */}
      <ScrollReveal>
        <section className="py-20 bg-[#F5F5F5]" data-testid="fee-structure">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">FEE STRUCTURE</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Annual Fee Details (INR)</h2>
            </div>
            <div className="overflow-x-auto rounded-lg shadow-sm">
              <table className="w-full bg-white" data-testid="fee-table">
                <thead>
                  <tr className="bg-[#1A2E6C] text-white">
                    <th className="px-6 py-4 text-left text-sm font-bold">Grade</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Tuition</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Development</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Transport</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#C0152A]/5'} data-testid={`fee-row-${i}`}>
                      <td className="px-6 py-4 text-sm font-medium text-[#1A2E6C]">{f.grade}</td>
                      <td className="px-6 py-4 text-sm text-[#333]">{f.tuition}</td>
                      <td className="px-6 py-4 text-sm text-[#333]">{f.dev}</td>
                      <td className="px-6 py-4 text-sm text-[#333]">{f.transport}</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#C0152A]">{f.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Eligibility */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="eligibility-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">ELIGIBILITY</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Admission Criteria</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibility.map((e, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-lg p-6 border-t-4 border-t-[#C0152A] hover-lift" data-testid={`eligibility-${i}`}>
                  <h3 className="text-[#1A2E6C] font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{e.grade}</h3>
                  <p className="text-[#C0152A] text-sm font-bold mb-1">Age: {e.age}</p>
                  <p className="text-[#666] text-sm">{e.req}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Documents Checklist */}
      <ScrollReveal>
        <section className="py-20 bg-[#F5F5F5]" data-testid="documents-section">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">DOCUMENTS REQUIRED</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Admission Checklist</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {docs.map((d, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg" data-testid={`doc-${i}`}>
                  <CheckCircle className="w-5 h-5 text-[#C0152A] shrink-0" />
                  <span className="text-[#333] text-sm">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Application Form */}
      <ScrollReveal>
        <section className="py-20 bg-white" data-testid="application-form-section">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">APPLY NOW</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Admission Application</h2>
            </div>
            <form onSubmit={handleSubmit} className="bg-white border-2 border-[#C0152A]/20 rounded-xl p-8 shadow-sm space-y-5" data-testid="admission-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Student Name *</label>
                  <input type="text" value={form.student_name} onChange={e => update('student_name', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333]" required data-testid="input-student-name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Date of Birth</label>
                  <input type="date" value={form.date_of_birth} onChange={e => update('date_of_birth', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333]" data-testid="input-dob" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Grade Applying For *</label>
                <select value={form.grade_applying} onChange={e => update('grade_applying', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333] bg-white" required data-testid="input-grade">
                  <option value="">Select Grade</option>
                  {['Class I','Class II','Class III','Class IV','Class V','Class VI','Class VII','Class VIII','Class IX','Class X','Class XI','Class XII'].map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Parent/Guardian Name *</label>
                  <input type="text" value={form.parent_name} onChange={e => update('parent_name', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333]" required data-testid="input-parent-name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Phone Number *</label>
                  <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333]" required data-testid="input-phone" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Email Address *</label>
                <input type="email" value={form.email} onChange={e => update('email', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333]" required data-testid="input-email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Address</label>
                <input type="text" value={form.address} onChange={e => update('address', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none min-h-[48px] text-[#333]" data-testid="input-address" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2E6C] mb-1">Additional Message</label>
                <textarea value={form.message} onChange={e => update('message', e.target.value)} rows={3} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0152A] focus:outline-none text-[#333] resize-none" data-testid="input-message" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-[#C0152A] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#a01223] transition-colors min-h-[52px] disabled:opacity-50" data-testid="submit-application-btn">
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </section>
      </ScrollReveal>

      {/* Important Dates */}
      <ScrollReveal>
        <section className="py-20 bg-[#F5F5F5]" data-testid="important-dates">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-label">IMPORTANT DATES</p>
              <h2 className="heading-h2 text-[#1A2E6C] font-bold">Admission Timeline</h2>
            </div>
            <div className="space-y-0">
              {dates.map((d, i) => (
                <div key={i} className="flex gap-4 items-start" data-testid={`date-${i}`}>
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#C0152A] border-4 border-[#C0152A]/20" />
                    {i < dates.length - 1 && <div className="w-0.5 h-16 bg-[#C0152A]/20" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-[#C0152A] font-bold text-sm">{d.date}</p>
                    <p className="text-[#1A2E6C] font-medium">{d.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
