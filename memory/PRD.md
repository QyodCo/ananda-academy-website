# ANANDA ACADEMY - School Website PRD

## Original Problem Statement
Build a complete, multi-page school website for "ANANDA ACADEMY" with tagline "The Joy of Learning" located in Uttarakhand, India. Founded 1995. CBSE Affiliated. 6 pages with full responsive design.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI (Port 3000)
- **Backend**: FastAPI + MongoDB + Resend Email (Port 8001)
- **Database**: MongoDB (local)
- **Email**: Resend API for contact/admission form delivery

## User Personas
- **Parents**: Seeking school admission info for children
- **Students**: Current and prospective students
- **Alumni**: Former students staying connected
- **Staff**: School administrators managing inquiries

## Core Requirements (Static)
- Light theme: White #FFFFFF, Deep Red #C0152A, Navy Blue #1A2E6C
- 6 pages: Home, About, Academics, Admissions, Campus Life, Contact
- Responsive design (320px - 1920px)
- Working forms with email delivery via Resend
- No dark backgrounds (except footer)

## What's Been Implemented (Feb 24, 2026)
- [x] Full 6-page website with React Router
- [x] Sticky navbar with hamburger mobile menu
- [x] "Ananda Academy" text visible on ALL screen sizes including mobile (15px/700/navy)
- [x] Hero slideshow (5 images, auto-advance, dots, swipe - no manual arrows)
- [x] CSS color cycling animation on hero heading (white>red>gold)
- [x] Pulse animation on Apply Now button, shimmer glow on tagline
- [x] Working search bar with dropdown results + navigation to pages/sections
- [x] Pure CSS announcement ticker
- [x] Stats bar, About preview with carousel, Principal's message
- [x] Why Choose Us, Infrastructure, Achievements sections
- [x] Testimonials, Admissions CTA banner (separated from footer)
- [x] About page: founding story/timeline, vision/mission, core values, alumni, awards
- [x] Academics: level selector tabs (2x2 on mobile), faculty spotlight
- [x] Admissions: 4-step process, fee table, eligibility, docs checklist, application form
- [x] Campus Life: photo gallery with lightbox, clubs, events, student council
- [x] Contact: form, map embed, social links, admissions enquiry
- [x] Footer with newsletter, Google Maps embed with dark filter
- [x] Footer copyright bar: "Designed by Bomb Code Co." with transparent logo (36px), no CBSE text
- [x] Mobile footer: two centered lines (copyright + Bomb Code credit)
- [x] Desktop footer: single centered line
- [x] Resend email integration for contact + admission forms
- [x] MongoDB storage for submissions, reviews, newsletter
- [x] Scroll reveal animations (Intersection Observer)
- [x] CTA section: parallax background image with dark overlay, centered white text, staggered fade-in animations
- [x] Admission popup modal: auto-shows after 1s, once per session, closes via X/overlay/Escape, displays ANANDA_ACADEMY.png
- [x] All 100% test pass rate (iteration 1, 2, 3)

## Prioritized Backlog
### P0 (Critical)
- All completed

### P1 (Important)
- Admin dashboard for managing admissions
- Online fee payment integration
- Photo/video upload for gallery management
- Bomb Code Co. credit link URL (currently href="#", user to provide)

### P2 (Nice to Have)
- Blog/news section
- Parent login portal
- Student results portal
- Multi-language support (Hindi/English)
- SEO optimization with meta tags
- PWA support for mobile
- Clean up Admissions page hydration warnings (minor)

## Next Tasks
1. Add admin panel for managing admission applications
2. Integrate payment gateway for online fee payment
3. Add dynamic content management (CMS) for news/events
