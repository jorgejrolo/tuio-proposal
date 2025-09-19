import '../styles/globals.css';
import Layout from '../components/Layout';
import ProposalProtection from '../components/ProposalProtection';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Custom App component to wrap all pages with the Layout and proposal protection.
 * Since the proposal has expired, all pages except /expired will be redirected.
 */
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Activamos las animaciones de aparición según scroll usando IntersectionObserver.
  // Re‑inicializamos el observer cada vez que cambia la ruta para captar
  // los nuevos elementos con clase `reveal` y evitar pantallas en blanco.
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
  }, [router.asPath]);

  return (
    <>
      {/* Definimos favicon con el logo de Jorge J. Rolo */}
      <Head>
        <link rel="icon" type="image/png" href="/assets/jorgejrolo.png" />
      </Head>
      <ProposalProtection>
        {router.pathname === '/expired' ? (
          // Para la página de caducidad, no usar el Layout normal
          <Component {...pageProps} />
        ) : (
          // Para otras páginas (que serán redirigidas), usar Layout
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ProposalProtection>
    </>
  );
}