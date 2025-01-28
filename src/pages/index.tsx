import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tavolo - Table Management for Restaurant Groups</title>
        <meta
          name="description"
          content="Tavolo replaces the patchwork of reservation tools with a single platform for multi-location restaurant groups."
        />
      </Head>

      <main className="hero">
        <h1>One platform for all your locations</h1>
        <p>
          Tavolo gives restaurant groups a single dashboard to manage reservations,
          waitlists, floor plans, and guest profiles across every location.
        </p>
        <a href="/demo" className="cta-button">Request a Demo</a>
      </main>

      <section className="features">
        <div className="feature">
          <h3>Guest Intelligence</h3>
          <p>
            Know your guests across locations. If a regular visits a new spot,
            the host already knows their preferences.
          </p>
        </div>
        <div className="feature">
          <h3>Cross-Location Analytics</h3>
          <p>
            See performance across all locations in one dashboard with
            proper timezone handling.
          </p>
        </div>
        <div className="feature">
          <h3>Easy Floor Plan Import</h3>
          <p>
            Import floor plans from OpenTable, Resy, or CSV. Get set up in minutes.
          </p>
        </div>
      </section>
    </>
  );
}
