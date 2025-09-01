import '../styles/globals.css';
import Layout from '../components/Layout';

/**
 * Custom App component to wrap all pages with the Layout. This
 * component imports the global styles and ensures the navigation
 * bar is present on every page. It also passes pageProps through
 * untouched.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}