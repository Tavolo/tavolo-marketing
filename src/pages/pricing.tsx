import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Pricing() {
  return (
    <Layout
      title="Pricing - Tavolo"
      description="Simple, transparent pricing for restaurant groups of all sizes. No per-cover fees, no hidden costs."
    >
      <PricingHero />
      <PricingTiers />
      <PricingFAQ />
      <PricingCTA />
    </Layout>
  );
}

function PricingHero() {
  return (
    <section className="bg-gradient-to-br from-tavolo-blue-900 to-tavolo-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-tavolo-blue-200 max-w-2xl mx-auto">
          No per-cover fees. No hidden costs. Just a flat monthly rate that makes sense as you scale.
        </p>
      </div>
    </section>
  );
}

function PricingTiers() {
  const tiers = [
    {
      name: 'Starter',
      price: '299',
      period: 'per location/month',
      description: 'Perfect for growing restaurant groups just getting started.',
      features: [
        'Up to 5 locations',
        'Unified reservations dashboard',
        'Basic guest profiles',
        'Floor plan management',
        'Email support',
        'Standard integrations',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '499',
      period: 'per location/month',
      description: 'For established groups that need advanced features.',
      features: [
        'Unlimited locations',
        'Cross-location guest intelligence',
        'Advanced analytics & reporting',
        'Real-time waitlist management',
        'Priority phone & email support',
        'API access & custom integrations',
        'Dedicated onboarding specialist',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact for pricing',
      description: 'For large groups with complex requirements.',
      features: [
        'Everything in Professional',
        'Custom SLAs',
        'Dedicated account manager',
        'Custom development & integrations',
        'Advanced security features',
        'Multi-brand support',
        'On-site training',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.highlighted
                  ? 'bg-tavolo-blue-900 text-white ring-4 ring-tavolo-orange-400 scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {tier.highlighted && (
                <span className="inline-block bg-tavolo-orange-400 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold ${tier.highlighted ? 'text-white' : 'text-tavolo-blue-900'}`}>
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline">
                {tier.price !== 'Custom' && (
                  <span className={`text-lg ${tier.highlighted ? 'text-tavolo-blue-200' : 'text-gray-500'}`}>$</span>
                )}
                <span className={`text-5xl font-bold ${tier.highlighted ? 'text-white' : 'text-tavolo-blue-900'}`}>
                  {tier.price}
                </span>
              </div>
              <p className={`text-sm mt-1 ${tier.highlighted ? 'text-tavolo-blue-200' : 'text-gray-500'}`}>
                {tier.period}
              </p>
              <p className={`mt-4 ${tier.highlighted ? 'text-tavolo-blue-100' : 'text-gray-600'}`}>
                {tier.description}
              </p>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        tier.highlighted ? 'text-tavolo-orange-400' : 'text-green-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={tier.highlighted ? 'text-tavolo-blue-100' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/demo"
                className={`mt-8 block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  tier.highlighted
                    ? 'bg-tavolo-orange-400 text-white hover:bg-tavolo-orange-500'
                    : 'bg-tavolo-blue-900 text-white hover:bg-tavolo-blue-800'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingFAQ() {
  const faqs = [
    {
      question: 'How does pricing compare to OpenTable?',
      answer: 'OpenTable charges per-cover fees that can quickly add up for high-volume restaurants. Our flat monthly rate means predictable costs that don\'t increase as you grow. Most restaurant groups save 30-50% after switching.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 14-day free trial on our Starter and Professional plans. No credit card required to get started.',
    },
    {
      question: 'How long does migration take?',
      answer: 'Most restaurant groups are fully migrated within a week. We handle importing your guest data, reservations, and floor plans from your existing platform.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely. You can change your plan at any time. If you upgrade, you\'ll get prorated access immediately. If you downgrade, the change takes effect at your next billing cycle.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, we offer a 15% discount when you pay annually instead of monthly. Contact our sales team for details.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading mb-12">Frequently Asked Questions</h2>

        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-tavolo-blue-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCTA() {
  return (
    <section className="py-16 bg-tavolo-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-tavolo-blue-900 mb-4">
          Not sure which plan is right for you?
        </h2>
        <p className="text-gray-600 mb-8">
          Our team can help you find the perfect fit for your restaurant group.
        </p>
        <Link href="/demo" className="btn-primary">
          Talk to Sales
        </Link>
      </div>
    </section>
  );
}
