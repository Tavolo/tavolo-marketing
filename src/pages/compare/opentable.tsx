import Head from 'next/head';

export default function TavoloVsOpenTable() {
  return (
    <>
      <Head>
        <title>Tavolo vs OpenTable - Comparison | Tavolo</title>
        <meta
          name="description"
          content="Compare Tavolo and OpenTable for multi-location restaurant groups. See why growing restaurant groups choose Tavolo."
        />
      </Head>

      <main className="comparison-page">
        <h1>Tavolo vs OpenTable</h1>
        <p className="subtitle">
          Which reservation platform is right for your restaurant group?
        </p>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Tavolo</th>
              <th>OpenTable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Multi-location dashboard</td>
              <td>✓ Single view for all locations</td>
              <td>✗ Separate login per location</td>
            </tr>
            <tr>
              <td>Cross-location guest profiles</td>
              <td>✓ Guest data synced across all locations</td>
              <td>✗ Siloed by location</td>
            </tr>
            <tr>
              <td>Pricing model</td>
              <td>Flat monthly fee</td>
              <td>Per-cover fees</td>
            </tr>
            <tr>
              <td>Floor plan management</td>
              <td>✓ Self-service import & editing</td>
              <td>Limited, requires support</td>
            </tr>
            <tr>
              <td>Cross-location analytics</td>
              <td>✓ Built-in</td>
              <td>✗ Manual export required</td>
            </tr>
            <tr>
              <td>POS integration</td>
              <td>✓ REST API (v2.0)</td>
              <td>Limited integrations</td>
            </tr>
          </tbody>
        </table>

        <section className="cta-section">
          <h2>Ready to switch?</h2>
          <p>
            Tavolo makes it easy to import your existing data from OpenTable.
            Most restaurant groups are fully migrated within a week.
          </p>
          <a href="/demo" className="cta-button">Request a Demo</a>
        </section>
      </main>
    </>
  );
}
