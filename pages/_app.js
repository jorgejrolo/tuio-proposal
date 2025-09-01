import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

/**
 * Custom App component to wrap all pages with the Layout. This
 * component imports the global styles and ensures the navigation
 * bar is present on every page. It also passes pageProps through
 * untouched.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Definimos favicon con el logo de Jorge J. Rolo */}
      <Head>
        <link rel="icon" type="image/png" href="/assets/jorgejrolo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}