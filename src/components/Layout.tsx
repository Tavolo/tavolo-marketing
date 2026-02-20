import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useState, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'Tavolo - Table Management for Restaurant Groups',
  description = 'Tavolo replaces the patchwork of reservation tools with a single platform for multi-location restaurant groups.'
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="Tavolo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-semibold tracking-tight text-brand-950 group-hover:text-brand-700 transition-colors">
              Tavolo
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link href="/#features" className="text-brand-600 hover:text-brand-950 transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-brand-600 hover:text-brand-950 transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link href="/compare/opentable" className="text-brand-600 hover:text-brand-950 transition-colors text-sm font-medium">
              Compare
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/demo" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-950 text-white relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 bg-white rounded-lg overflow-hidden p-1">
                <Image
                  src="/logo.jpeg"
                  alt="Tavolo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-semibold tracking-tight">Tavolo</span>
            </Link>
            <p className="text-brand-400 max-w-sm leading-relaxed mb-8">
              The modern reservation platform built for multi-location restaurant groups.
              One dashboard, unified guest profiles, powerful analytics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-5 text-white">Product</h4>
              <ul className="space-y-3 text-brand-400">
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/compare/opentable" className="hover:text-white transition-colors">vs OpenTable</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-white">Company</h4>
              <ul className="space-y-3 text-brand-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><a href="mailto:hello@tavolo.io" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-white">Resources</h4>
              <ul className="space-y-3 text-brand-400">
                <li><Link href="/demo" className="hover:text-white transition-colors">Request Demo</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-500 text-sm">
            &copy; {new Date().getFullYear()} Tavolo. All rights reserved.
          </p>
          <div className="flex gap-8 text-brand-500 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
