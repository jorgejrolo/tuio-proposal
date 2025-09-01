import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import { useEffect } from 'react';

/**
 * Custom App component to wrap all pages with the Layout. This
 * component imports the global styles and ensures the navigation
 * bar is present on every page. It also passes pageProps through
 * untouched.
 */
export default function MyApp({ Component, pageProps }) {
  // Activamos las animaciones de aparición según scroll usando IntersectionObserver.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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