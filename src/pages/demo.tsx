import Layout from '@/components/Layout';
import { useState, FormEvent } from 'react';

export default function Demo() {
  return (
    <Layout
      title="Request a Demo - Tavolo"
      description="See how Tavolo can transform your restaurant group's operations. Schedule a personalized demo with our team."
    >
      <DemoSection />
    </Layout>
  );
}

function DemoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    locations: '',
    currentPlatform: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section className="py-32 pt-40 bg-brand-50">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="card">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-display italic text-brand-950 mb-4">Thank you!</h2>
            <p className="text-brand-600 mb-6">
              We&apos;ve received your demo request. A member of our team will reach out within 24 hours to schedule your personalized demo.
            </p>
            <p className="text-brand-500 text-sm">
              In the meantime, check out our <a href="/compare/opentable" className="text-accent hover:underline">comparison guide</a> to learn more about how Tavolo stacks up.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 pt-40 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="section-heading mb-6">
              See Tavolo
              <br />
              <span className="font-display italic">in action</span>
            </h1>
            <p className="section-subheading mb-10">
              Get a personalized demo tailored to your restaurant group&apos;s needs. We&apos;ll show you how Tavolo can help you:
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Unify reservations across all your locations',
                'Build rich guest profiles that follow diners everywhere',
                'Get actionable insights with cross-location analytics',
                'Cut costs compared to per-cover pricing models',
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                    <span className="text-brand-950 font-semibold">SC</span>
                  </div>
                </div>
                <div>
                  <p className="text-brand-700 italic mb-3">
                    &ldquo;The demo really showed us what we were missing. Within a month of switching, we had insights we&apos;d never had before.&rdquo;
                  </p>
                  <p className="font-semibold text-brand-950">Sarah Chen</p>
                  <p className="text-brand-500 text-sm">VP of Operations, Coastal Restaurant Group</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-display italic text-brand-950 mb-8">Request your demo</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-brand-700 mb-2">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-brand-700 mb-2">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-2">
                  Work email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-700 mb-2">
                  Restaurant group name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                />
              </div>

              <div>
                <label htmlFor="locations" className="block text-sm font-medium text-brand-700 mb-2">
                  Number of locations *
                </label>
                <select
                  id="locations"
                  name="locations"
                  required
                  value={formData.locations}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select...</option>
                  <option value="2-5">2-5 locations</option>
                  <option value="6-10">6-10 locations</option>
                  <option value="11-25">11-25 locations</option>
                  <option value="26-50">26-50 locations</option>
                  <option value="50+">50+ locations</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentPlatform" className="block text-sm font-medium text-brand-700 mb-2">
                  Current reservation platform
                </label>
                <select
                  id="currentPlatform"
                  name="currentPlatform"
                  value={formData.currentPlatform}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select...</option>
                  <option value="opentable">OpenTable</option>
                  <option value="resy">Resy</option>
                  <option value="yelp">Yelp Reservations</option>
                  <option value="sevenrooms">SevenRooms</option>
                  <option value="toast">Toast Tables</option>
                  <option value="other">Other</option>
                  <option value="none">None / Manual</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-700 mb-2">
                  Anything specific you&apos;d like to see in the demo?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-accent py-4 text-lg"
              >
                Request Demo
              </button>

              <p className="text-center text-brand-500 text-sm">
                By submitting, you agree to our terms. We&apos;ll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
