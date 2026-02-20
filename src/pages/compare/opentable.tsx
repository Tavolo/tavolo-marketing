import Layout from '@/components/Layout';
import Link from 'next/link';

export default function TavoloVsOpenTable() {
  return (
    <Layout
      title="Tavolo vs OpenTable - Comparison | Tavolo"
      description="Compare Tavolo and OpenTable for multi-location restaurant groups. See why growing restaurant groups choose Tavolo over OpenTable."
    >
      <CompareHero />
      <ComparisonTable />
      <DetailedComparison />
      <CostCalculator />
      <MigrationSection />
    </Layout>
  );
}

function CompareHero() {
  return (
    <section className="bg-gradient-to-br from-tavolo-blue-900 to-tavolo-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tavolo vs OpenTable
          </h1>
          <p className="text-xl text-tavolo-blue-200">
            Which reservation platform is right for your restaurant group? Here&apos;s a detailed comparison to help you decide.
          </p>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const comparisons = [
    {
      feature: 'Multi-location dashboard',
      tavolo: 'Single view for all locations',
      opentable: 'Separate login per location',
      tavoloWins: true,
    },
    {
      feature: 'Cross-location guest profiles',
      tavolo: 'Guest data synced across all locations',
      opentable: 'Siloed by location',
      tavoloWins: true,
    },
    {
      feature: 'Pricing model',
      tavolo: 'Flat monthly fee',
      opentable: 'Per-cover fees ($1-$7.50/cover)',
      tavoloWins: true,
    },
    {
      feature: 'Floor plan management',
      tavolo: 'Self-service import & editing',
      opentable: 'Limited, requires support calls',
      tavoloWins: true,
    },
    {
      feature: 'Cross-location analytics',
      tavolo: 'Built-in with timezone handling',
      opentable: 'Manual export & spreadsheets required',
      tavoloWins: true,
    },
    {
      feature: 'API & integrations',
      tavolo: 'Full REST API (v2.0)',
      opentable: 'Limited partner integrations',
      tavoloWins: true,
    },
    {
      feature: 'Guest discovery network',
      tavolo: 'Growing network',
      opentable: 'Large established network',
      tavoloWins: false,
    },
    {
      feature: 'Brand recognition',
      tavolo: 'Emerging platform',
      opentable: 'Well-known consumer brand',
      tavoloWins: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Feature
                </th>
                <th className="py-4 px-4 text-left text-sm font-semibold text-tavolo-orange-500 uppercase tracking-wide">
                  Tavolo
                </th>
                <th className="py-4 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  OpenTable
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-4 font-medium text-tavolo-blue-900">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      {row.tavoloWins ? (
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={row.tavoloWins ? 'text-gray-900' : 'text-gray-600'}>{row.tavolo}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      {!row.tavoloWins ? (
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={!row.tavoloWins ? 'text-gray-900' : 'text-gray-600'}>{row.opentable}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function DetailedComparison() {
  const sections = [
    {
      title: 'Multi-Location Management',
      description: 'OpenTable was built for individual restaurants. Each location has its own login, its own dashboard, and its own data. For a 10-location group, that means 10 separate systems to manage.',
      tavoloAdvantage: 'Tavolo gives you a single dashboard for all locations. See today\'s reservations across your entire portfolio. Manage floor plans, view analytics, and handle guest profiles from one place.',
    },
    {
      title: 'Guest Intelligence',
      description: 'When a regular at your downtown location visits your new waterfront spot, does the host know? With OpenTable, guest data is siloed by location.',
      tavoloAdvantage: 'Tavolo syncs guest profiles across all your locations. Preferences, allergies, VIP status, and visit history follow your guests wherever they dine in your group.',
    },
    {
      title: 'Predictable Pricing',
      description: 'OpenTable charges per-cover fees ranging from $1 for network reservations to $7.50 for premium placements. For high-volume restaurants, this adds up fast.',
      tavoloAdvantage: 'Tavolo charges a flat monthly fee per location. No per-cover fees means your costs stay predictable as you grow, and you keep more of your margin.',
    },
    {
      title: 'Analytics That Scale',
      description: 'Comparing performance across locations with OpenTable means exporting CSVs, wrestling with timezone differences, and building spreadsheets.',
      tavoloAdvantage: 'Tavolo\'s analytics are built for multi-location groups. Compare metrics across locations with proper timezone handling, drill down into trends, and get insights without the manual work.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading mb-12">A Deeper Look</h2>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-tavolo-blue-900 mb-4">{section.title}</h3>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <div className="bg-tavolo-orange-50 border-l-4 border-tavolo-orange-400 p-4 rounded-r-lg">
                <p className="text-tavolo-blue-900">
                  <span className="font-semibold">Tavolo advantage:</span> {section.tavoloAdvantage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CostCalculator() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading mb-4">See How Much You Could Save</h2>
        <p className="section-subheading mb-12">
          Most restaurant groups save 30-50% after switching from OpenTable to Tavolo.
        </p>

        <div className="bg-tavolo-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-tavolo-orange-500 mb-2">$42,000</div>
              <p className="text-gray-600">Average annual savings for a 10-location group</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-tavolo-orange-500 mb-2">35%</div>
              <p className="text-gray-600">Average cost reduction vs per-cover pricing</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-tavolo-orange-500 mb-2">7 days</div>
              <p className="text-gray-600">Average migration time from OpenTable</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/demo" className="btn-primary">
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MigrationSection() {
  const steps = [
    {
      number: '1',
      title: 'Export Your Data',
      description: 'We help you export guest data, reservations, and floor plans from OpenTable.',
    },
    {
      number: '2',
      title: 'Configure Tavolo',
      description: 'Our team sets up your locations, imports your data, and configures your floor plans.',
    },
    {
      number: '3',
      title: 'Train Your Team',
      description: 'Quick training sessions get your hosts and managers up to speed in under an hour.',
    },
    {
      number: '4',
      title: 'Go Live',
      description: 'We run parallel for a few days, then you\'re fully on Tavolo. Most groups are live within a week.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-tavolo-blue-900 to-tavolo-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ready to switch from OpenTable?
        </h2>
        <p className="text-xl text-tavolo-blue-200 text-center mb-12">
          We make migration easy. Here&apos;s how it works:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="bg-white/10 rounded-xl p-6">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-tavolo-orange-400 rounded-full flex items-center justify-center font-bold text-white mr-4">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-tavolo-blue-200">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/demo" className="btn-primary text-lg px-8 py-4">
            Start Your Migration
          </Link>
        </div>
      </div>
    </section>
  );
}
