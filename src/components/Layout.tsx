import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

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
        <link rel="icon" href="/favicon.ico" />
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
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tavolo-orange-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-tavolo-blue-900">Tavolo</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-600 hover:text-tavolo-blue-900 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-tavolo-blue-900 transition-colors">
              Pricing
            </Link>
            <Link href="/compare/opentable" className="text-gray-600 hover:text-tavolo-blue-900 transition-colors">
              Compare
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/demo" className="btn-primary">
              Request Demo
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-tavolo-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-tavolo-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">Tavolo</span>
            </div>
            <p className="text-tavolo-blue-200 max-w-md">
              The modern reservation platform built for multi-location restaurant groups.
              One dashboard, unified guest profiles, powerful analytics.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-tavolo-blue-200">
              <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/compare/opentable" className="hover:text-white transition-colors">vs OpenTable</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-tavolo-blue-200">
              <li><Link href="/demo" className="hover:text-white transition-colors">Request Demo</Link></li>
              <li><a href="mailto:hello@tavolo.io" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tavolo-blue-800 mt-8 pt-8 text-center text-tavolo-blue-300">
          <p>&copy; {new Date().getFullYear()} Tavolo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
