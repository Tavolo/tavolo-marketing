import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-tavolo-blue-900 via-tavolo-blue-800 to-tavolo-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            One platform for
            <span className="text-tavolo-orange-400"> all your locations</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-tavolo-blue-200 max-w-2xl mx-auto">
            Tavolo gives restaurant groups a single dashboard to manage reservations,
            waitlists, floor plans, and guest profiles across every location.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="btn-primary text-lg px-8 py-4">
              Request a Demo
            </Link>
            <Link href="/pricing" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
              View Pricing
            </Link>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 max-w-5xl mx-auto">
            <div className="bg-tavolo-blue-800 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-tavolo-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-tavolo-blue-200">Watch the 2-minute demo</p>
              </div>
            </div>
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
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wide mb-8">
          Trusted by leading restaurant groups
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div key={logo} className="text-gray-400 font-semibold text-lg">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Guest Intelligence',
      description: 'Know your guests across locations. When a VIP visits a new spot, the host already knows their preferences, allergies, and favorite table.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Cross-Location Analytics',
      description: 'See performance across all locations in one dashboard. Compare metrics, spot trends, and make data-driven decisions with proper timezone handling.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Easy Floor Plan Import',
      description: 'Import floor plans from OpenTable, Resy, or CSV. Self-service editing means your team can rearrange tables for events in minutes, not days.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Real-Time Waitlist',
      description: 'Manage walk-ins across all locations with accurate wait time predictions. Guests get SMS updates so they can grab a drink next door.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      title: 'Multi-Location Dashboard',
      description: 'One login, all locations. See today\'s reservations, no-show rates, and capacity across your entire portfolio at a glance.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: 'POS & CRM Integration',
      description: 'Connect with your existing systems via our REST API. Sync guest spend data, loyalty status, and preferences automatically.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Everything you need to manage your restaurant group</h2>
        <p className="section-subheading">
          Built specifically for multi-location operators who need unified tools, not a patchwork of solutions.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-xl border border-gray-100 hover:border-tavolo-orange-200 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-tavolo-orange-100 rounded-lg flex items-center justify-center text-tavolo-orange-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-tavolo-blue-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
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
    <section className="py-20 bg-tavolo-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Trusted by restaurant groups nationwide</h2>
        <p className="section-subheading">
          See why operators are switching from legacy platforms to Tavolo.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-tavolo-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-tavolo-blue-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.company} &middot; {testimonial.locations}</p>
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
    <section className="py-20 bg-gradient-to-br from-tavolo-blue-900 to-tavolo-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to unify your restaurant group?
        </h2>
        <p className="text-xl text-tavolo-blue-200 mb-10">
          Join hundreds of restaurant groups who&apos;ve made the switch. Most teams are fully migrated within a week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/demo" className="btn-primary text-lg px-8 py-4">
            Schedule a Demo
          </Link>
          <Link href="/compare/opentable" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
            Compare to OpenTable
          </Link>
        </div>
      </div>
    </section>
  );
}
