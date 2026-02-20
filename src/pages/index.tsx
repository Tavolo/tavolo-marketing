import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-200/30 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 border border-brand-200 mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-brand-700">Now serving 500+ restaurant groups</span>
          </div>

          {/* Headline */}
          <h1 className="section-heading mb-8 opacity-0 animate-fade-up animate-delay-100">
            One platform for
            <br />
            <span className="font-display italic">all your locations</span>
          </h1>

          {/* Subheadline */}
          <p className="section-subheading mb-12 opacity-0 animate-fade-up animate-delay-200">
            Tavolo gives restaurant groups a single dashboard to manage reservations,
            waitlists, floor plans, and guest profiles across every location.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-up animate-delay-300">
            <Link href="/demo" className="btn-accent">
              Request a Demo
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 opacity-0 animate-fade-up animate-delay-400">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-brand-200 border-2 border-white" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-brand-500">Loved by 2,000+ restaurant operators</p>
            </div>
          </div>
        </div>

        {/* Hero visual - floating dashboard preview */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 hidden xl:block opacity-0 animate-fade-in animate-delay-500">
          <div className="relative">
            <div className="w-[700px] h-[500px] bg-white rounded-3xl shadow-2xl border border-brand-100 overflow-hidden animate-float">
              <div className="h-12 bg-brand-50 border-b border-brand-100 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6 bg-brand-50 h-full">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 mb-3" />
                      <div className="h-6 bg-brand-100 rounded w-16 mb-2" />
                      <div className="h-3 bg-brand-50 rounded w-24" />
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-4 bg-brand-100 rounded w-32" />
                    <div className="h-8 bg-accent/10 rounded-full w-24" />
                  </div>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-brand-50 last:border-0">
                      <div className="w-10 h-10 rounded-full bg-brand-100" />
                      <div className="flex-1">
                        <div className="h-3 bg-brand-100 rounded w-32 mb-2" />
                        <div className="h-2 bg-brand-50 rounded w-48" />
                      </div>
                      <div className="h-6 bg-green-100 rounded-full w-16" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 rounded-2xl rotate-12 blur-sm" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-200/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosSection() {
  const logos = [
    'The Capital Grille',
    'Nobu',
    'STK Steakhouse',
    'Ocean Prime',
    'Del Frisco\'s',
    'Morton\'s',
    'Mastro\'s',
    'Fleming\'s',
  ];

  return (
    <section className="py-16 border-y border-brand-100 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-brand-400 text-sm uppercase tracking-widest mb-10 font-medium">
          Trusted by leading restaurant groups
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="mx-12 text-2xl font-display italic text-brand-300 hover:text-brand-600 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Guest Intelligence',
      description: 'Know your guests across locations. When a VIP visits a new spot, the host already knows their preferences.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Cross-Location Analytics',
      description: 'See performance across all locations in one dashboard. Compare metrics with proper timezone handling.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Easy Floor Plan Import',
      description: 'Import from OpenTable, Resy, or CSV. Your team can rearrange tables for events in minutes.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'Real-Time Waitlist',
      description: 'Manage walk-ins across all locations with accurate wait time predictions and SMS updates.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Multi-Location Dashboard',
      description: 'One login, all locations. See reservations, no-show rates, and capacity at a glance.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      title: 'POS & CRM Integration',
      description: 'Connect with your existing systems via REST API. Sync guest spend data automatically.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-32 bg-brand-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="section-heading mb-6">
            Everything you need to
            <br />
            <span className="font-display italic">manage your group</span>
          </h2>
          <p className="section-subheading mx-auto">
            Built specifically for multi-location operators who need unified tools, not a patchwork of solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-950 text-white flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-950 mb-3">{feature.title}</h3>
              <p className="text-brand-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '$40K+', label: 'Saved annually vs OpenTable' },
    { value: '48h', label: 'Average migration time' },
    { value: '50+', label: 'POS integrations' },
    { value: '99.9%', label: 'Uptime guarantee' },
  ];

  return (
    <section className="py-20 bg-brand-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-display italic text-accent mb-3">
                {stat.value}
              </div>
              <div className="text-brand-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We switched from OpenTable and saved over $40k/year while getting better tools. The cross-location guest profiles alone are worth it.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "Coastal Restaurant Group",
      locations: "12 locations"
    },
    {
      quote: "Our hosts used to fumble when regulars visited other locations. Now they know every VIP the moment they walk in.",
      author: "Marcus Thompson",
      role: "Director of Guest Experience",
      company: "Urban Hospitality Partners",
      locations: "8 locations"
    },
    {
      quote: "The analytics finally let us compare apples to apples across time zones. We found opportunities we'd been missing for years.",
      author: "Jennifer Okonkwo",
      role: "CEO",
      company: "Heartland Dining Collective",
      locations: "15 locations"
    },
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-heading mb-6">
            Trusted by restaurant
            <br />
            <span className="font-display italic">groups nationwide</span>
          </h2>
          <p className="section-subheading mx-auto">
            See why operators are switching from legacy platforms to Tavolo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card relative">
              {/* Quote mark */}
              <div className="absolute -top-4 left-8 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brand-700 mb-8 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100" />
                  <div>
                    <p className="font-semibold text-brand-950">{testimonial.author}</p>
                    <p className="text-brand-500 text-sm">{testimonial.role}</p>
                    <p className="text-brand-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 bg-brand-950 relative overflow-hidden">
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-700/20 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-white mb-8 leading-tight">
          Ready to unify your
          <br />
          restaurant group?
        </h2>
        <p className="text-xl text-brand-300 mb-12 max-w-2xl mx-auto">
          Join hundreds of restaurant groups who've made the switch. Most teams are fully migrated within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/demo" className="btn-accent text-lg">
            Schedule a Demo
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/compare/opentable" className="btn-secondary border-brand-700 text-white hover:bg-brand-800 hover:border-brand-600">
            Compare to OpenTable
          </Link>
        </div>
      </div>
    </section>
  );
}
