## NovaCore Digital — Landing Page

A polished, responsive single-page marketing site for "NovaCore Digital" with a sticky navbar, smooth-scroll anchors, working contact form, and modern SaaS-style aesthetic.

### Design direction
- Palette: near-black (#0B0B0F) + white + neutral grays, with an indigo→violet gradient accent for CTAs and hero.
- Typography: Inter (system fallback), large bold headings, generous tracking on eyebrows.
- Cards: rounded-2xl, soft shadows, subtle border, hover lift + shadow.
- Layout: max-width container (~1200px), generous vertical spacing, mobile-first.

### Page structure (single route at `/`)
Built as one scrollable landing page with anchor sections (true single-page site, hash links are appropriate here). Each section is its own reusable component file.

1. **Navbar** (`src/components/Navbar.tsx`)
   - Sticky, translucent backdrop-blur on scroll.
   - Logo "NovaCore Digital" + nav links (Home, About, Services, Projects, Contact).
   - Mobile hamburger → slide-down menu using local `useState`.
   - Smooth-scroll to section IDs.

2. **Hero** (`src/components/Hero.tsx`)
   - Gradient background (indigo/violet radial + grid overlay).
   - H1 "NovaCore Digital", tagline, short paragraph.
   - Primary CTA "Book a Free Consultation" → smooth-scrolls to #contact.
   - Secondary "View our work" → #portfolio.

3. **About** (`src/components/About.tsx`)
   - Intro paragraph + 3 highlight cards (Fast Delivery, Modern Design, Conversion Focused) with lucide icons.

4. **Services** (`src/components/Services.tsx`)
   - Grid of 5 cards: Website Design & Development, Social Media Marketing, Branding & Graphic Design, SEO & Growth Marketing, AI Automation.
   - Icon + title + description, hover scale/shadow.

5. **WhyChooseUs** (`src/components/WhyChooseUs.tsx`)
   - 4-up grid: Fast delivery, Modern UI/UX, Affordable pricing, Business-focused strategy.

6. **Portfolio** (`src/components/Portfolio.tsx`)
   - 4 project cards (Restaurant Redesign, Real Estate Lead Gen, Fitness Brand Campaign, AI Chatbot) with gradient image placeholders, title, description, hover overlay.

7. **Testimonials** (`src/components/Testimonials.tsx`)
   - 3 quote cards (Sarah Mitchell, Daniel Weber, Aisha Khan) with avatar initials and star rating.

8. **Contact** (`src/components/Contact.tsx`)
   - Two-column: contact info (email, phone, location) + working form.
   - Validation via `zod` + react-hook-form (already standard in the stack); required name/email/message with length limits.
   - On submit: show success toast via `sonner`, clear form. No backend.

9. **Footer** (`src/components/Footer.tsx`)
   - Brand blurb, quick links, dummy social icons (Twitter, LinkedIn, Instagram, GitHub from lucide), copyright.

### Files to create / modify
- Modify `src/routes/index.tsx` — replace placeholder, render all sections in order, add page metadata via `head()`.
- Modify `src/routes/__root.tsx` — add Sonner `<Toaster />` and `scroll-behavior: smooth` on html.
- Create the 9 component files above under `src/components/`.
- Use existing shadcn `Button`, `Input`, `Textarea`, `Label`, `Card`, `sonner` components.

### Technical notes
- Smooth scrolling: add `scroll-behavior: smooth` in `styles.css` plus `scroll-mt-20` on section anchors to offset the sticky navbar.
- All content uses realistic copy (no lorem ipsum).
- Fully responsive: 1-col mobile → 2/3/4-col on `md`/`lg`.
- Accent color implemented with Tailwind utility gradients (no theme token changes needed).
